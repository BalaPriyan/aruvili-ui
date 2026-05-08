use std::process::Command;
use std::path::Path;

pub enum PackageManager {
    Npm,
    Pnpm,
    Yarn,
    Bun,
}

impl PackageManager {
    pub fn detect() -> Self {
        if Path::new("pnpm-lock.yaml").exists() {
            PackageManager::Pnpm
        } else if Path::new("yarn.lock").exists() {
            PackageManager::Yarn
        } else if Path::new("bun.lockb").exists() {
            PackageManager::Bun
        } else {
            PackageManager::Npm
        }
    }

    pub fn get_install_command(&self) -> (&'static str, &'static str) {
        match self {
            PackageManager::Npm => ("npm", "install"),
            PackageManager::Pnpm => ("pnpm", "add"),
            PackageManager::Yarn => ("yarn", "add"),
            PackageManager::Bun => ("bun", "add"),
        }
    }

    pub fn install(&self, packages: &[&str]) -> anyhow::Result<()> {
        if packages.is_empty() {
            return Ok(());
        }

        let (cmd, arg) = self.get_install_command();
        let mut command = Command::new(cmd);
        command.arg(arg);
        
        for pkg in packages {
            command.arg(pkg);
        }

        let status = command.status()?;

        if !status.success() {
            return Err(anyhow::anyhow!("Failed to install packages"));
        }

        Ok(())
    }
}
