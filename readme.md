# Wikimedia ESLint config

## Installation

```sh
npm install --save-dev eslint-config-wikimedia
```

Then, [configure ESLint](https://eslint.org/docs/latest/use/configure/configuration-files) with an `eslint.config.js` file. The package exports a function. Pass it the names of one or more configs, and it returns the [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) objects for them:

```js
const wikimedia = require( 'eslint-config-wikimedia' );

module.exports = [
	...wikimedia( 'client', 'jquery', 'mediawiki' )
];
```

ESLint 9.29 or later is required. Configs in the old `.eslintrc.json` format are not supported.

## Example configurations
Below are some potential recommended uses:

### A typical front-end project
This config allows the latest supported ES version code (currently ES2019) and browser native functions. It will complain about ES2020+ code and language features. This target version updates over time following [MediaWiki's compatibility](https://www.mediawiki.org/wiki/Compatibility#Browsers).
It also automatically applies the Vue plugin and Vue-specific rules to `.vue` files.

`eslint.config.js`:
```js
const wikimedia = require( 'eslint-config-wikimedia' );

module.exports = [
	...wikimedia( 'client' )
];
```

If you want to explicitly allow ES2019 code only, you can use `client/es2019` instead.

#### jQuery
This config adds the jQuery `$` global, and additional rules preventing the use of jQuery features which are deprecated, have performance issues, or have simple modern ES alternatives.

```js
module.exports = [
	...wikimedia( 'client', 'jquery' )
];
```

#### MediaWiki
Code that runs in MediaWiki can use this config. It enforces rules that are specific to the MediaWiki codebase (core and extensions), such as correct documentation of `mw.message` usage, and prohibiting self-closing tags in Vue templates.

```js
module.exports = [
	...wikimedia( 'client', 'mediawiki' )
];
```

### Adding a QUnit test suite
Use `defineConfig` with `files` and `extends` to apply a config to the files in your tests directory:

```js
const { defineConfig } = require( 'eslint/config' );
const wikimedia = require( 'eslint-config-wikimedia' );

module.exports = defineConfig(
	wikimedia( 'client', 'jquery', 'mediawiki' ),
	{
		files: [ 'tests/qunit/**' ],
		extends: [ wikimedia( 'mediawiki/qunit' ) ]
	}
);
```

For standalone JavaScript libraries and Node.js projects, use `qunit` instead of `mediawiki/qunit`.

### Adding a Mocha test suite
The following config will enable the Mocha environment and some Mocha related rules:

```js
module.exports = defineConfig(
	wikimedia( 'client' ),
	{
		files: [ 'tests/mocha/**' ],
		extends: [ wikimedia( 'server', 'mocha' ) ]
	}
);
```

### Adding a Selenium WDIO test suite
The following config will enable WDIO globals, as well as the Mocha and server configs:

```js
module.exports = defineConfig(
	wikimedia( 'client' ),
	{
		files: [ 'tests/selenium/**' ],
		extends: [ wikimedia( 'selenium' ) ]
	}
);
```

### A typical Node project
This config allows ES2022 code and Node native functions. It will complain about ES2023+ code and language features.

```js
module.exports = [
	...wikimedia( 'server' )
];
```

The `server` config consists of `common`, `node` and `language/es2022`. To use later versions of ES, for example ES2024, you can use the following config:

```js
module.exports = [
	...wikimedia( 'common', 'node', 'language/es2024' )
];
```

### TypeScript
TypeScript cannot be directly handled by the browser (or ResourceLoader), so it will always target either code that runs
on the server or tests or code that is compiled to JavaScript first in a non-MediaWiki step.
TypeScript files are automatically included, similar to JSON and YAML files.

### A basic project
Please note that the basic project configuration does not specify any language or environmental defaults, and is unlikely to be suitable. However, if you wish to target clients with ES3 language support, or earlier versions of Node, this is a good place from which to start.

```js
module.exports = [
	...wikimedia( 'common' )
];
```

## Ignored files
The configs ignore these files by default ([global ignores](https://eslint.org/docs/latest/use/configure/ignore)), relative to `eslint.config.js`:

* Dot folders, e.g. `.git/` (and `node_modules/`, which ESLint ignores itself)
* `vendor/` and `coverage/`
* `package-lock.json` files
* Translations in `i18n/` folders, except `en.json` and `qqq.json`

The list is available as `wikimedia.ignores`. To ignore more files, or to lint an ignored file, add global ignores after the Wikimedia configs. Use a `!` prefix to lint an ignored file:

```js
const { globalIgnores } = require( 'eslint/config' );
const wikimedia = require( 'eslint-config-wikimedia' );

module.exports = [
	...wikimedia( 'client', 'jquery', 'mediawiki' ),
	globalIgnores( [ 'resources/lib/', '!coverage/' ] )
];
```

## Migrating from `.eslintrc.json`
* Replace each `.eslintrc.json` file with one `eslint.config.js` file in the project root.
* Use the same config names as in `extends`, without the `wikimedia/` prefix. `wikimedia` on its own is `common`.
* Replace a `.eslintrc.json` file in a subdirectory, e.g. `tests/qunit/`, with a block that has `files` and `extends`, as above. If the file has `"root": true`, the configs from the parent directories do not apply to those files. Add an `ignores` pattern for the subdirectory to the other blocks.
* Move the patterns in `.eslintignore` files and `ignorePatterns` to `globalIgnores()`. Files in the `ignores` list above are already ignored.
* `require( 'eslint-config-wikimedia/flat' )` continues to work.

## Proposing changes

Major changes should be discussed [on mediawiki.org](https://www.mediawiki.org/wiki/Manual_talk:Coding_conventions/JavaScript) or on the [Wikitech mailing list](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) beforehand.

## Semver policy

Same approach as in ESLint, see https://github.com/eslint/eslint#user-content-semantic-versioning-policy.
