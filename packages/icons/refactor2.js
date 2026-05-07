const fs = require('fs');

let content = fs.readFileSync('index.tsx', 'utf8');

// Split by "export const "
const parts = content.split('export const ');

let icons = [];

for (let i = 1; i < parts.length; i++) { // Skip the preamble
  let part = parts[i];
  
  // part looks like:
  // "CheckIcon = createIcon(<path... />, 'CheckIcon');\n..."
  
  let match = part.match(/^(\w+)\s*=\s*createIcon\(([\s\S]*?),\s*'[^']*'\);/);
  if (match) {
    let name = match[1];
    let jsx = match[2].trim();
    if (jsx.startsWith('<>')) {
      jsx = jsx.substring(2, jsx.length - 3).trim();
    }
    icons.push({ name, jsx });
  } else {
    console.log("Failed to match part starting with:", part.substring(0, 50));
  }
}

console.log(`Parsed ${icons.length} icons.`);

if (icons.length === 0) {
  console.log("Failed to parse icons");
  process.exit(1);
}

let newContent = `import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
}

/**
 * Enterprise Icon Registry
 */
export const iconRegistry = {
${icons.map(i => `  ${i.name}: (\n    <>\n      ${i.jsx.split('\n').map(l => l.trim()).filter(Boolean).join('\n      ')}\n    </>\n  )`).join(',\n')}
};

export type IconName = keyof typeof iconRegistry;

/**
 * Universal Icon Component
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps & { name: IconName }>(
  ({ name, size = 20, strokeWidth = 1.75, className, children, ...props }, ref) => {
    const paths = iconRegistry[name];
    if (!paths) return null;
    
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        {paths}
        {children}
      </svg>
    );
  }
);
Icon.displayName = "Icon";

/**
 * Individual Exports (for Tree Shaking & Backwards Compatibility)
 */
const createIcon = (name: IconName) => {
  const Component = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <Icon name={name} ref={ref} {...props} />
  ));
  Component.displayName = name;
  return Component;
};

${icons.map(i => `export const ${i.name} = createIcon('${i.name}');`).join('\n')}
`;

fs.writeFileSync('index.tsx', newContent);
console.log('Successfully wrote index.tsx');
