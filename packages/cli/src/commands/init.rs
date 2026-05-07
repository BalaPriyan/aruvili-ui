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
}

pub async fn run() -> anyhow::Result<()> {
    let green = Style::new().green().bold();
    
    println!("\nLet's set up Aruvili UI in your project.\n");

    let component_path: String = Input::new()
        .with_prompt("Where should your components be installed?")
        .default("src/components/ui".into())
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
    };

    let config_json = serde_json::to_string_pretty(&config)?;
    fs::write("aruvili.json", config_json)?;

    if !Path::new(&component_path).exists() {
        fs::create_dir_all(&component_path)?;
    }

    println!("\n{} Project initialized!", green.apply_to("✔"));
    println!("   Configuration saved to {}aruvili.json{}", Style::new().cyan().apply_to(""), Style::new().cyan().apply_to(""));
    Ok(())
}
