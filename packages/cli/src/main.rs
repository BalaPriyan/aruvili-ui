use clap::{Parser, Subcommand};
use console::Style;

mod registry;
mod commands;

#[derive(Parser)]
#[command(name = "aruvili")]
#[command(about = "Aruvili UI CLI - Build beautiful apps faster", long_about = None)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    Init,
    Add {
        component: Option<String>,
        
        #[arg(short, long)]
        overwrite: bool,
    },
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let cli = Cli::parse();
    let blue = Style::new().blue().bold();

    println!("{}", blue.apply_to("
    ___                _ _ _ 
   / _ \\              (_) (_)
  / /_\\ \\_ __ _   _ _ _| |_ 
  |  _  | '__| | | | \\ \\ | |
  | | | | |  | |_| | |\\  / |
  \\_| |_/_|   \\__,_|_| \\/|_|
    "));

    match &cli.command {
        Commands::Init => {
            commands::init::run().await?;
        }
        Commands::Add { component, overwrite } => {
            commands::add::run(component.clone(), *overwrite).await?;
        }
    }

    Ok(())
}
