import { colors, spacing, radius } from '../tokens';

/**
 * Generates CSS variable strings from design tokens.
 * Useful for injecting into a global CSS file or a style tag.
 */
export function generateCssVariables() {
  let css = ':root {\n';

  // Colors
  Object.entries(colors).forEach(([name, shades]) => {
    if (typeof shades === 'string') {
      css += `  --color-${name}: ${shades};\n`;
    } else {
      Object.entries(shades).forEach(([shade, value]) => {
        const varName = shade === 'DEFAULT' ? `--color-${name}` : `--color-${name}-${shade}`;
        css += `  ${varName}: ${value};\n`;
      });
    }
  });

  // Spacing
  Object.entries(spacing).forEach(([name, value]) => {
    css += `  --spacing-${name.replace('.', '-')}: ${value};\n`;
  });

  // Radius
  Object.entries(radius).forEach(([name, value]) => {
    css += `  --radius-${name}: ${value};\n`;
  });

  css += '}\n';
  return css;
}
