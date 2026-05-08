use std::fs;
use std::path::Path;
use console::Style;
use dialoguer::Select;
use crate::registry;
use crate::commands::init::Config;

pub async fn run(component_name: Option<String>, overwrite: bool) -> anyhow::Result<()> {
    let green = Style::new().green().bold();
    let yellow = Style::new().yellow().bold();
    let red = Style::new().red().bold();

    if !Path::new("aruvili.json").exists() {
        return Err(anyhow::anyhow!("Project not initialized. Please run 'aruvili init' first."));
    }
    let config_content = fs::read_to_string("aruvili.json")?;
    let config: Config = serde_json::from_str(&config_content)?;

    let name = match component_name {
        Some(n) => n,
        None => {
            println!("{} Fetching available components...", yellow.apply_to("⧗"));
            let registry = registry::fetch_registry().await?;
            let items: Vec<String> = registry.components.iter().map(|c| c.name.clone()).collect();
            
            let selection = Select::new()
                .with_prompt("Select a component to add")
                .items(&items)
                .default(0)
                .interact()?;
                
            items[selection].clone()
        }
    };

    println!("{} Fetching {} from registry...", yellow.apply_to("⧗"), name);
    let component = match registry::fetch_component(&name).await {
        Ok(c) => c,
        Err(e) => return Err(anyhow::anyhow!("Failed to fetch component {}: {}", name, e)),
    };

    // Ensure utils directory and file exist
    let utils_content = match crate::registry::fetch_utils().await {
        Ok(u) => u.content,
        Err(_) => {
            if config.typescript {
                r#"import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
"#.to_string()
            } else {
                r#"import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
"#.to_string()
            }
        }
    };

    if let Ok(true) = crate::commands::init::create_utils_file(&config.utils_path, config.typescript, &utils_content) {
        println!("{} Created utility functions at {}", green.apply_to("✔"), Style::new().cyan().apply_to(&config.utils_path));
        let pm = crate::utils::PackageManager::detect();
        let _ = pm.install(&["clsx", "tailwind-merge"]);
    }
 
    for file in component.files {
        let file_path = Path::new(&config.component_path).join(&file.name);
        
        if let Some(parent) = file_path.parent() {
            fs::create_dir_all(parent)?;
        }

        if file_path.exists() && !overwrite {
            println!("{} File {} already exists. Use --overwrite to replace it.", red.apply_to("✖"), file.name);
            continue;
        }

        let mut content = file.content.clone();
        
        // 1. Connect to local utils (handle both naming conventions)
        let mut rel_utils = calculate_relative_path(&file_path, &config.utils_path);
        if let Some(idx) = rel_utils.rfind('.') {
            if idx > rel_utils.rfind('/').unwrap_or(0) {
                rel_utils.truncate(idx);
            }
        }
        content = content.replace("@aruviliui/core/utils", &rel_utils);
        content = content.replace("@aruvili/core/utils", &rel_utils);

        // 2. Connect to local types
        let type_regex = regex::Regex::new(r#"@aruvili(?:ui)?/core/types/([a-zA-Z0-9\-/]+)"#).unwrap();
        
        // We use a clone of the content to find all matches first
        let matches: Vec<(String, String)> = type_regex.captures_iter(&content)
            .map(|cap| (cap[0].to_string(), cap[1].to_string()))
            .collect();

        for (full_match, type_name) in matches {
            // Fetch and save type file if it doesn't exist
            let local_type_path = Path::new(&config.types_path).join(format!("{}.ts", type_name));
            if !local_type_path.exists() {
                if let Ok(type_data) = registry::fetch_type(&type_name).await {
                    if let Some(parent) = local_type_path.parent() {
                        fs::create_dir_all(parent)?;
                    }
                    fs::write(&local_type_path, &type_data.content)?;
                }
            }

            // Calculate relative path for import
            let mut rel_type = calculate_relative_path(&file_path, &Path::new(&config.types_path).join(&type_name).to_string_lossy());
            if let Some(idx) = rel_type.rfind('.') {
                if idx > rel_type.rfind('/').unwrap_or(0) {
                    rel_type.truncate(idx);
                }
            }
            content = content.replace(&full_match, &rel_type);
        }

        fs::write(&file_path, content)?;
        println!("{} Created {}", green.apply_to("✔"), file.name);
    }

    if !component.dependencies.is_empty() {
        println!("\n{} Installing dependencies: {}...", yellow.apply_to("⧗"), component.dependencies.join(", "));
        let pm = crate::utils::PackageManager::detect();
        
        let deps: Vec<&str> = component.dependencies.iter().map(|s| s.as_str()).collect();
        
        if let Err(e) = pm.install(&deps) {
            println!("   {} Failed to install dependencies: {}. Please install them manually.", red.apply_to("✖"), e);
            for dep in component.dependencies {
                println!("   - {}", dep);
            }
        } else {
            println!("   {} Dependencies installed!", green.apply_to("✔"));
        }
    }

    println!("\n{} Component {} added successfully!", green.apply_to("✔"), name);
    Ok(())
}

fn calculate_relative_path(from_file: &Path, to_utils: &str) -> String {
    let from_dir = from_file.parent().unwrap_or(Path::new(""));
    let to_path = Path::new(to_utils);

    let from_components: Vec<_> = from_dir.components().collect();
    let to_components: Vec<_> = to_path.components().collect();

    let mut common_count = 0;
    for (f, t) in from_components.iter().zip(to_components.iter()) {
        if f == t {
            common_count += 1;
        } else {
            break;
        }
    }

    let up_count = from_components.len() - common_count;
    let mut rel_path = if up_count == 0 {
        "./".to_string()
    } else {
        "../".repeat(up_count)
    };

    for i in common_count..to_components.len() {
        let comp = to_components[i].as_os_str().to_string_lossy();
        rel_path.push_str(&comp);
        if i < to_components.len() - 1 {
            rel_path.push('/');
        }
    }
    
    if !rel_path.starts_with('.') {
        rel_path = format!("./{}", rel_path);
    }

    rel_path
}
