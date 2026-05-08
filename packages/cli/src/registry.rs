use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Registry {
    pub name: String,
    pub components: Vec<ComponentIndex>,
    pub utils: Option<String>,
    pub types: Option<Vec<String>>,
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

#[derive(Debug, Serialize, Deserialize)]
pub struct Utils {
    pub name: String,
    pub content: String,
}

pub fn get_registry_url() -> String {
    std::env::var("ARUVILI_REGISTRY_URL")
        .unwrap_or_else(|_| "https://raw.githubusercontent.com/BalaPriyan/aruvili-ui/master/registry".to_string())
}

pub async fn fetch_registry() -> anyhow::Result<Registry> {
    let url = format!("{}/index.json", get_registry_url());
    let registry = reqwest::get(url)
        .await?
        .json::<Registry>()
        .await?;
    Ok(registry)
}

pub async fn fetch_utils() -> anyhow::Result<Utils> {
    let url = format!("{}/utils.json", get_registry_url());
    let utils = reqwest::get(url)
        .await?
        .json::<Utils>()
        .await?;
    Ok(utils)
}

pub async fn fetch_component(component_name: &str) -> anyhow::Result<Component> {
    let url = format!("{}/components/{}.json", get_registry_url(), component_name);
    let component = reqwest::get(url)
        .await?
        .json::<Component>()
        .await?;
    Ok(component)
}

pub async fn fetch_type(type_path: &str) -> anyhow::Result<Utils> {
    let url = format!("{}/types/{}", get_registry_url(), type_path.replace(".ts", ".json"));
    let type_data = reqwest::get(url)
        .await?
        .json::<Utils>() // Reusing Utils struct as it's the same (name + content)
        .await?;
    Ok(type_data)
}
