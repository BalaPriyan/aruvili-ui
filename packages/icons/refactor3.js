const fs = require('fs');
const { execSync } = require('child_process');


let content = fs.readFileSync('index.tsx', 'utf8');

let firstExportIndex = content.indexOf('export const ');
let body = content.substring(firstExportIndex);
let parts = body.split('export const ');

let icons = [];

for (let part of parts) {
  if (!part.trim()) continue;
  
  let eqIdx = part.indexOf(' = createIcon(');
  if (eqIdx === -1) continue;
  
  let name = part.substring(0, eqIdx).trim();
  
  let start = eqIdx + ' = createIcon('.length;
  let nameStr = ", '" + name + "'";
  let nameIdx = part.lastIndexOf(nameStr);
  
  if (nameIdx === -1) {
    nameStr = ', "' + name + '"';
    nameIdx = part.lastIndexOf(nameStr);
  }
  
  if (nameIdx !== -1) {
    let jsx = part.substring(start, nameIdx).trim();
    if (jsx.startsWith('<>') && jsx.endsWith('</>')) {
      jsx = jsx.substring(2, jsx.length - 3).trim();
    }
    icons.push({ name, jsx });
  } else {
    console.log("Could not parse JSX for", name);
  }
}

console.log("Parsed " + icons.length + " icons.");

if (icons.length === 0) {
  console.log("Failed to parse icons");
  process.exit(1);
}

let newContent = "import React from 'react';\n\n" +
"export interface IconProps extends React.SVGProps<SVGSVGElement> {\n" +
"  size?: number | string;\n" +
"  strokeWidth?: number | string;\n" +
"}\n\n" +
"/**\n" +
" * Enterprise Icon Registry\n" +
" */\n" +
"export const iconRegistry = {\n" +
icons.map(i => "  " + i.name + ": (\n    <>\n      " + i.jsx.split('\n').map(l => l.trim()).filter(Boolean).join('\n      ') + "\n    </>\n  )").join(',\n') + "\n" +
"};\n\n" +
"export type IconName = keyof typeof iconRegistry;\n\n" +
"/**\n" +
" * Universal Icon Component\n" +
" */\n" +
"export const Icon = React.forwardRef<SVGSVGElement, IconProps & { name: IconName }>(\n" +
"  ({ name, size = 20, strokeWidth = 1.75, className, children, ...props }, ref) => {\n" +
"    const paths = iconRegistry[name as IconName];\n" +
"    if (!paths) return null;\n" +
"    \n" +
"    return (\n" +
"      <svg\n" +
"        ref={ref}\n" +
"        width={size}\n" +
"        height={size}\n" +
"        viewBox=\"0 0 24 24\"\n" +
"        fill=\"none\"\n" +
"        stroke=\"currentColor\"\n" +
"        strokeWidth={strokeWidth}\n" +
"        strokeLinecap=\"round\"\n" +
"        strokeLinejoin=\"round\"\n" +
"        className={className}\n" +
"        {...props}\n" +
"      >\n" +
"        {paths}\n" +
"        {children}\n" +
"      </svg>\n" +
"    );\n" +
"  }\n" +
");\n" +
"Icon.displayName = \"Icon\";\n\n" +
"/**\n" +
" * Individual Exports (for Tree Shaking & Backwards Compatibility)\n" +
" */\n" +
"const createIcon = (name: IconName) => {\n" +
"  const Component = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (\n" +
"    <Icon name={name} ref={ref} {...props} />\n" +
"  ));\n" +
"  Component.displayName = name;\n" +
"  return Component;\n" +
"};\n\n" +
icons.map(i => "export const " + i.name + " = createIcon('" + i.name + "');").join('\n') + "\n";

fs.writeFileSync('index.tsx', newContent);
console.log('Successfully wrote index.tsx');
