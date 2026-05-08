use std::fs;
use std::path::Path;
use dialoguer::{Input, Select};
use serde::{Deserialize, Serialize};
use console::Style;

#[derive(Debug, Serialize, Deserialize)]
pub struct Config {
    pub component_path: String,
    pub tailwind_config: String,
    pub typescript: bool,
    #[serde(default = "default_utils_path")]
    pub utils_path: String,
    #[serde(default = "default_types_path")]
    pub types_path: String,
}

fn default_utils_path() -> String {
    "src/lib/utils".into()
}

fn default_types_path() -> String {
    "src/types/aruvili".into()
}

pub async fn run() -> anyhow::Result<()> {
    let green = Style::new().green().bold();
    let yellow = Style::new().yellow().bold();
    
    println!("\nLet's set up Aruvili UI in your project.\n");

    let component_path: String = Input::new()
        .with_prompt("Where should your components be installed?")
        .default("src/components/ui".into())
        .interact_text()?;

    let utils_path: String = Input::new()
        .with_prompt("Where should your utility functions be located?")
        .default("src/lib/utils".into())
        .interact_text()?;

    let types_path: String = Input::new()
        .with_prompt("Where should your shared types be located?")
        .default("src/types/aruvili".into())
        .interact_text()?;

    let tailwind_config: String = Input::new()
        .with_prompt("Path to your tailwind.config.js?")
        .default("tailwind.config.js".into())
        .interact_text()?;

    let is_ts = Select::new()
        .with_prompt("Are you using TypeScript?")
        .items(&["Yes", "No"])
        .default(0)
        .interact()? == 0;

    let config = Config {
        component_path: component_path.clone(),
        tailwind_config,
        typescript: is_ts,
        utils_path: utils_path.clone(),
        types_path: types_path.clone(),
    };

    let config_json = serde_json::to_string_pretty(&config)?;
    fs::write("aruvili.json", config_json)?;

    if !Path::new(&component_path).exists() {
        fs::create_dir_all(&component_path)?;
    }

    // Create utils directory and file
    println!("{} Fetching utility functions...", yellow.apply_to("⧗"));
    let utils_content = match crate::registry::fetch_utils().await {
        Ok(u) => u.content,
        Err(_) => {
            // Fallback to hardcoded if fetch fails
            if is_ts {
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

    if create_utils_file(&utils_path, is_ts, &utils_content)? {
        println!("   {} Utility functions created at {}", green.apply_to("✔"), Style::new().cyan().apply_to(&utils_path));
        
        // Auto-install dependencies
        println!("{} Installing base dependencies (clsx, tailwind-merge)...", yellow.apply_to("⧗"));
        let pm = crate::utils::PackageManager::detect();
        if let Err(e) = pm.install(&["clsx", "tailwind-merge"]) {
            println!("   {} Failed to install dependencies: {}. Please install them manually.", Style::new().red().apply_to("✖"), e);
        } else {
            println!("   {} Base dependencies installed!", green.apply_to("✔"));
        }
    }

    println!("\n{} Project initialized!", green.apply_to("✔"));
    println!("   Configuration saved to {}aruvili.json{}", Style::new().cyan().apply_to(""), Style::new().cyan().apply_to(""));
    Ok(())
}

pub fn create_utils_file(utils_path: &str, is_ts: bool, content: &str) -> anyhow::Result<bool> {
    let path = Path::new(utils_path);
    if let Some(parent) = path.parent() {
        fs::create_dir_all(parent)?;
    }

    let extension = if is_ts { "ts" } else { "js" };
    let full_path = if path.extension().is_none() {
        path.with_extension(extension)
    } else {
        path.to_path_buf()
    };

    if !full_path.exists() {
        fs::write(full_path, content)?;
        Ok(true)
    } else {
        Ok(false)
    }
}
