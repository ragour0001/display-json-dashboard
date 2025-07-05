const fs = require('fs');
const path = require('path');
const css = require('css');

// Path to the original CSS file
const cssFilePath = path.join(__dirname, '../src/features/user-dashboard/user-dashboard.css');
// Path to the cleaned CSS file
const cleanedFilePath = path.join(__dirname, '../src/features/user-dashboard/user-dashboard.cleaned.css');

// Read the CSS file
const cssContent = fs.readFileSync(cssFilePath, 'utf8');

// Parse the CSS
const ast = css.parse(cssContent);
const seenSelectors = new Set();
const cleanedRules = [];

if (ast.stylesheet && ast.stylesheet.rules) {
  for (const rule of ast.stylesheet.rules) {
    if (rule.type === 'rule') {
      // Join selectors for uniqueness
      const selectorKey = rule.selectors.join(',');
      if (!seenSelectors.has(selectorKey)) {
        seenSelectors.add(selectorKey);
        cleanedRules.push(rule);
      }
    } else {
      // Keep non-rule types (e.g., @media, @font-face)
      cleanedRules.push(rule);
    }
  }
  ast.stylesheet.rules = cleanedRules;
}

// Stringify the cleaned CSS
const cleanedCss = css.stringify(ast, { compress: false });

// Write to a new file
fs.writeFileSync(cleanedFilePath, cleanedCss, 'utf8');

console.log(`Duplicate CSS rules removed. Cleaned file saved as: ${cleanedFilePath}`); 