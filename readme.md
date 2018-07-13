[![Build Status](https://travis-ci.org/wikimedia/eslint-config-wikimedia.svg?branch=master)](https://travis-ci.org/wikimedia/eslint-config-wikimedia)

# Wikimedia ESLint config

## Usage

### Install

```sh
npm install --save-dev eslint-config-wikimedia
```

### Extend the configuration

Configure ESLint with a `.eslintrc` file using the following contents:
```json
{
	"extends": "wikimedia"
}
```

### Try it out

```sh
node_modules/.bin/eslint-wikimedia .
```

### Auto-fix offenders where possible

```sh
node_modules/.bin/eslint-wikimedia . --fix
```

### Use the recommended defaults

#### Execute the linter in package.json OR Gruntfile

```json
{
  ...,
  "scripts": {
    "lint": "eslint-wikimedia .",
    "lint:fix": "npm run -s lint -- --fix",
    "test": "npm run -s lint && your-other-tests",
  ...
}
```

```js
...
  eslint: {
    options: {
      cache: true,
      maxWarnings: 0,
      reportUnusedDisableDirectives: true
    }
...
```

#### Exclude the cached lint results from Git

```gitignore
...
/.eslintcache
...
```

## Proposing changes

Major changes should be discussed [on mediawiki.org](https://www.mediawiki.org/wiki/Manual_talk:Coding_conventions/JavaScript) or on the [Wikitech mailing list](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) beforehand.

## Semver policy

Same approach as in ESLint, see https://github.com/eslint/eslint#user-content-semantic-versioning-policy.
