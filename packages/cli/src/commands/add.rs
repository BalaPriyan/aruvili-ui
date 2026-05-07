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
 
    for file in component.files {
        let file_path = Path::new(&config.component_path).join(&file.name);
        
        if let Some(parent) = file_path.parent() {
            fs::create_dir_all(parent)?;
        }

        if file_path.exists() && !overwrite {
            println!("{} File {} already exists. Use --overwrite to replace it.", red.apply_to("✖"), file.name);
            continue;
        }

        fs::write(&file_path, &file.content)?;
        println!("{} Created {}", green.apply_to("✔"), file.name);
    }

    if !component.dependencies.is_empty() {
        println!("\n{} Component requires the following dependencies:", yellow.apply_to("ℹ"));
        for dep in component.dependencies {
            println!("   - {}", dep);
        }
        println!("\nPlease install them using your package manager.");
    }

    println!("\n{} Component {} added successfully!", green.apply_to("✔"), name);
    Ok(())
}
