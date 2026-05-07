const fs = require('fs');

let content = fs.readFileSync('index.tsx', 'utf8');

const iconRegex = /export const (\w+) = createIcon\(([\s\S]*?),\s*'\1'\);/g;

let registry = {};
let match;
while ((match = iconRegex.exec(content)) !== null) {
  let name = match[1];
  let jsx = match[2].trim();
  if (jsx.startsWith('<>')) {
    jsx = jsx.substring(2, jsx.length - 3).trim();
  }
  registry[name] = jsx;
}

console.log(`Found ${Object.keys(registry).length} icons.`);

let newIndexTsx = `import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
}

/**
 * Enterprise Icon Registry
 * Centralized paths for optimal performance and dynamic rendering.
 */
export const iconRegistry = {
${Object.entries(registry).map(([name, jsx]) => `  ${name}: (\n    <>\n      ${jsx.split('\n').map(l => l.trim()).filter(Boolean).join('\n      ')}\n    </>\n  )`).join(',\n')}
};

export type IconName = keyof typeof iconRegistry;

/**
 * Universal Icon Component
 * Perfect for dynamic rendering (e.g. from a CMS or database)
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
 * Individual Icon Exports
 * Preserves tree-shaking capabilities while utilizing the central registry.
 */
const createIcon = (name: IconName) => {
  const Component = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <Icon name={name} ref={ref} {...props} />
  ));
  Component.displayName = name;
  return Component;
};

${Object.keys(registry).map(name => `export const ${name} = createIcon('${name}');`).join('\n')}
`;

fs.writeFileSync('index.tsx', newIndexTsx);
console.log('Successfully refactored index.tsx');
