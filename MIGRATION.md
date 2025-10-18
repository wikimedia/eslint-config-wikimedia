# Migration Guide: ESLint 8 → ESLint 9

## Breaking Changes in v1.0.0

This version of `eslint-config-wikimedia` requires **ESLint 9** and uses the new **flat config format**.

### What Changed

1. **ESLint 9 Required**: Minimum version is now `eslint@^9.0.0`
2. **Flat Config Format**: Configuration files must now use `eslint.config.js` instead of `.eslintrc.json`
3. **ES Modules**: All configs are now ES modules (package `type: "module"`)
4. **New Import Syntax**: Configs are imported as modules, not strings

### Migration Steps

#### 1. Update Dependencies

```bash
npm install --save-dev eslint@^9 eslint-config-wikimedia@^1.0.0
```

#### 2. Delete Old Config Files

Remove `.eslintrc.json`, `.eslintrc.js`, `.eslintrc.yml`, or similar files.

#### 3. Create New Config File

Create `eslint.config.js` in your project root.

**Before (ESLint 8):**
```json
{
  "extends": "wikimedia/client"
}
```

**After (ESLint 9):**
```javascript
import wikimedia from 'eslint-config-wikimedia/client';

export default [
  ...wikimedia
];
```

### Common Patterns

#### Client Project with MediaWiki

**Before:**
```json
{
  "extends": [
    "wikimedia/client",
    "wikimedia/mediawiki"
  ]
}
```

**After:**
```javascript
import client from 'eslint-config-wikimedia/client';
import mediawiki from 'eslint-config-wikimedia/mediawiki';

export default [
  ...client,
  ...mediawiki
];
```

#### Node/Server Project

**Before:**
```json
{
  "extends": "wikimedia/server"
}
```

**After:**
```javascript
import server from 'eslint-config-wikimedia/server';

export default [
  ...server
];
```

#### Test Files

**Before** (`tests/.eslintrc.json`):
```json
{
  "extends": "wikimedia/qunit"
}
```

**After** (in main `eslint.config.js`):
```javascript
import base from 'eslint-config-wikimedia';
import qunit from 'eslint-config-wikimedia/qunit';

export default [
  ...base,
  {
    files: ['tests/**/*.js'],
    ...qunit
  }
];
```

### Available Configs

All configs are now imported as ES modules:

- `eslint-config-wikimedia` - Base config
- `eslint-config-wikimedia/client` - Client/browser config
- `eslint-config-wikimedia/client/es6` - Client with ES6
- `eslint-config-wikimedia/client/es2016` - Client with ES2016
- `eslint-config-wikimedia/client/es2017` - Client with ES2017
- `eslint-config-wikimedia/server` - Server/Node config (ES2022)
- `eslint-config-wikimedia/node` - Node.js specific rules
- `eslint-config-wikimedia/mediawiki` - MediaWiki specific
- `eslint-config-wikimedia/mediawiki/qunit` - MediaWiki + QUnit
- `eslint-config-wikimedia/jquery` - jQuery rules
- `eslint-config-wikimedia/vue` - Vue 3 rules
- `eslint-config-wikimedia/vue3` - Vue 3 rules (alias)
- `eslint-config-wikimedia/qunit` - QUnit test rules
- `eslint-config-wikimedia/mocha` - Mocha test rules
- `eslint-config-wikimedia/jest` - Jest test rules
- `eslint-config-wikimedia/selenium` - Selenium/WDIO rules
- `eslint-config-wikimedia/typescript` - TypeScript rules
- `eslint-config-wikimedia/json` - JSON file rules
- `eslint-config-wikimedia/yaml` - YAML file rules
- `eslint-config-wikimedia/jsdoc` - JSDoc rules
- `eslint-config-wikimedia/jsduck` - JSDuck rules
- `eslint-config-wikimedia/language/es2015` through `es2024` - Language version rules

### Staying on ESLint 8

If you're not ready to migrate, you can continue using version `0.31.0`:

```bash
npm install --save-dev eslint@^8 eslint-config-wikimedia@0.31.0
```

### More Information

- [ESLint 9 Migration Guide](https://eslint.org/docs/latest/use/migrate-to-9.0.0)
- [Flat Config Documentation](https://eslint.org/docs/latest/use/configure/configuration-files)

