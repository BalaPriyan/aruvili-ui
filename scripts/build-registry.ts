import fs from 'fs';
import path from 'path';

// Use process.cwd() as the base path when running from the root
const BASE_DIR = process.cwd();
const COMPONENTS_DIR = path.join(BASE_DIR, 'packages/react/components');
const OUTPUT_DIR = path.join(BASE_DIR, 'registry');
const COMPONENTS_OUTPUT_DIR = path.join(OUTPUT_DIR, 'components');

interface ComponentFile {
    name: string;
    content: string;
}

interface Component {
    name: string;
    dependencies: string[];
    files: ComponentFile[];
}

interface ComponentIndex {
    name: string;
    dependencies: string[];
    files: string[];
    registry_path: string;
}

// Ensure output directories exist
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);
if (!fs.existsSync(COMPONENTS_OUTPUT_DIR)) fs.mkdirSync(COMPONENTS_OUTPUT_DIR);

const components: ComponentIndex[] = [];

// Get all component files
const files = fs.readdirSync(COMPONENTS_DIR).filter(f => f.endsWith('.tsx'));

for (const file of files) {
    const name = file.replace('.tsx', '').toLowerCase();
    const content = fs.readFileSync(path.join(COMPONENTS_DIR, file), 'utf8');

    // Simple dependency detection
    const dependencies: string[] = [];
    if (content.includes('framer-motion')) dependencies.push('framer-motion');
    if (content.includes('lucide-react')) dependencies.push('lucide-react');
    if (content.includes('clsx')) dependencies.push('clsx');
    if (content.includes('tailwind-merge')) dependencies.push('tailwind-merge');
    if (content.includes('@aruviliui/core')) dependencies.push('@aruviliui/core');

    const componentData: Component = {
        name,
        dependencies,
        files: [
            {
                name: file,
                content
            }
        ]
    };

    // Write component JSON
    fs.writeFileSync(
        path.join(COMPONENTS_OUTPUT_DIR, `${name}.json`),
        JSON.stringify(componentData, null, 2)
    );

    components.push({
        name,
        dependencies,
        files: [file],
        registry_path: `components/${name}.json`
    });
}

// Write index.json
const index = {
    name: "Aruvili UI Registry",
    components
};

fs.writeFileSync(
    path.join(OUTPUT_DIR, 'index.json'),
    JSON.stringify(index, null, 2)
);

console.log(`✅ Registry generated with ${components.length} components.`);
