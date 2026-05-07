use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Registry {
    pub name: String,
    pub components: Vec<ComponentIndex>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ComponentIndex {
    pub name: String,
    pub dependencies: Vec<String>,
    pub dev_dependencies: Option<Vec<String>>,
    pub files: Vec<String>,
    pub registry_path: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Component {
    pub name: String,
    pub dependencies: Vec<String>,
    pub files: Vec<ComponentFile>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ComponentFile {
    pub name: String,
    pub content: String,
}

pub const REGISTRY_URL: &str = "https://raw.githubusercontent.com/BalaPriyan/aruvili-ui/master/registry";

pub async fn fetch_registry() -> anyhow::Result<Registry> {
    let url = format!("{}/index.json", REGISTRY_URL);
    let registry = reqwest::get(url)
        .await?
        .json::<Registry>()
        .await?;
    Ok(registry)
}

pub async fn fetch_component(component_name: &str) -> anyhow::Result<Component> {
    let url = format!("{}/components/{}.json", REGISTRY_URL, component_name);
    let component = reqwest::get(url)
        .await?
        .json::<Component>()
        .await?;
    Ok(component)
}
