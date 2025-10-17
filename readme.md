# Wikimedia ESLint config

**Version 1.0.0+ requires ESLint 9.** For ESLint 8, use version 0.31.0. See [MIGRATION.md](./MIGRATION.md) for migration instructions.

## Installation

```sh
npm install --save-dev eslint@^9 eslint-config-wikimedia
```

Then, [configure ESLint](https://eslint.org/docs/latest/use/configure/configuration-files) with `eslint.config.js` using the flat config format.

## Example configurations
Below are some potential recommended uses:

### A typical front-end project
This config allows the latest supported ES version code (currently ES2017) and browser native functions. It will complain about ES2018+ code and language features. This target version updates over time.
It also automatically applies the Vue plugin and Vue-specific rules to `.vue` files.

`eslint.config.js`:
```javascript
import wikimedia from 'eslint-config-wikimedia/client';

export default [
	...wikimedia
];
```
If you want to only allow ES6 code and browser native functions, you can use `eslint-config-wikimedia/client/es6` instead.

#### jQuery
This config adds the jQuery `$` global, and additional rules preventing the use of jQuery features which are deprecated, have performance issues, or have simple modern ES alternatives.
`eslint.config.js`:
```javascript
import client from 'eslint-config-wikimedia/client';
import jquery from 'eslint-config-wikimedia/jquery';

export default [
	...client,
	...jquery
];
```

#### MediaWiki
Code that runs in MediaWiki can use this config. It enforces rules that are specific to the MediaWiki codebase (core and extensions), such as correct documentation of `mw.message` usage, and prohibiting self-closing tags in Vue templates.
`eslint.config.js`:
```javascript
import client from 'eslint-config-wikimedia/client';
import mediawiki from 'eslint-config-wikimedia/mediawiki';

export default [
	...client,
	...mediawiki
];
```

### Adding a QUnit test suite
You can extend the above config to apply different rules to test files:

For MediaWiki projects:
`eslint.config.js`:
```javascript
import base from 'eslint-config-wikimedia';
import qunit from 'eslint-config-wikimedia/mediawiki/qunit';

export default [
	...base,
	{
		files: [ 'tests/qunit/**/*.js' ],
		...qunit
	}
];
```

Or for standalone JavaScript libraries and Node.js projects:
`eslint.config.js`:
```javascript
import base from 'eslint-config-wikimedia';
import qunit from 'eslint-config-wikimedia/qunit';

export default [
	...base,
	{
		files: [ 'tests/**/*.js' ],
		...qunit
	}
];
```

### Adding a Mocha test suite
The following config will enable the Mocha environment and some Mocha related rules:

`eslint.config.js`:
```javascript
import server from 'eslint-config-wikimedia/server';
import mocha from 'eslint-config-wikimedia/mocha';

export default [
	...server,
	{
		files: [ 'tests/mocha/**/*.js' ],
		...mocha
	}
];
```

### Adding a Selenium WDIO test suite
The following config will enable WDIO globals, as well as the Mocha and server configs:

`eslint.config.js`:
```javascript
import selenium from 'eslint-config-wikimedia/selenium';

export default [
	...selenium
];
```

### A typical Node project
This config allows ES2022 code and Node native functions (_i.e._, Node 18+). It will complain about ES2023+ code and language features.

`eslint.config.js`:
```javascript
import server from 'eslint-config-wikimedia/server';

export default [
	...server
];
```

The `wikimedia/server` config consists of `wikimedia`, `wikimedia/node` and `wikimedia/language/es2022`. To use later versions of ES, for example ES2023, you can use the following config:
`eslint.config.js`:
```javascript
import wikimedia from 'eslint-config-wikimedia';
import node from 'eslint-config-wikimedia/node';
import es2023 from 'eslint-config-wikimedia/language/es2023';

export default [
	...wikimedia,
	...node,
	...es2023
];
```

### TypeScript
TypeScript cannot be directly handled by the browser (or ResourceLoader), so it will always target either code that runs
on the server or tests or code that is compiled to JavaScript first in a non-MediaWiki step.
TypeScript files are automatically linted when using the base configuration.

`eslint.config.js`:
```javascript
import wikimedia from 'eslint-config-wikimedia';

export default [
	...wikimedia
	// TypeScript files are automatically handled
];
```

### A basic project
Please note that the basic project configuration does not specify any language or environmental defaults, and is unlikely to be suitable. However, if you wish to target clients with ES3 language support, or earlier versions of Node, this is a good place from which to start.

`eslint.config.js`:
```javascript
import wikimedia from 'eslint-config-wikimedia';

export default [
	...wikimedia
];
```

## Overriding rules

With flat config, you can easily override any rules from this package by adding your own configuration objects after the base config:

`eslint.config.js`:
```javascript
import wikimedia from 'eslint-config-wikimedia/client';

export default [
	...wikimedia,
	{
		rules: {
			// Override rules from wikimedia
			'indent': [ 'error', 2 ],  // Use 2 spaces instead of tabs
			'max-len': [ 'warn', 120 ],  // Increase line length limit
			'no-console': 'off'  // Allow console.log
		}
	}
];
```

You can also override rules for specific files:
```javascript
import wikimedia from 'eslint-config-wikimedia/client';

export default [
	...wikimedia,
	{
		files: [ 'scripts/**/*.js' ],
		rules: {
			'no-console': 'off'  // Allow console only in scripts/
		}
	}
];
```

## Proposing changes

Major changes should be discussed [on mediawiki.org](https://www.mediawiki.org/wiki/Manual_talk:Coding_conventions/JavaScript) or on the [Wikitech mailing list](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) beforehand.

## Semver policy

Same approach as in ESLint, see https://github.com/eslint/eslint#user-content-semantic-versioning-policy.
