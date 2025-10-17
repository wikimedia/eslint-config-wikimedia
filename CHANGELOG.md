1.0.0 / 2025-10-18
==================

* [BREAKING CHANGE] Migrate to ESLint 9 and flat config format
  * Minimum ESLint version is now 9.0.0
  * All configurations converted to ES modules using flat config format
  * Configuration files moved from root to `configs/` directory
  * Old `.json` config files replaced with `.js` ES modules
  * Package now uses `"type": "module"` and exports ES modules
  * Users must update their `.eslintrc.*` files to `eslint.config.js`
  * See MIGRATION.md for detailed migration instructions

—
* Add `globals` package dependency for global variable definitions
* Update package.json structure with proper `exports` field
* Files list updated to new structure: `index.js`, `configs/`, documentation

0.31.0 / 2025-07-11
===================

* Add profile for TypeScript files (Michael Große)

—
* build: Test in Node 24, expand supported engines declaration (James D. Forrester)
* JSON/YAML: Define parser in json/yaml.json (Ed Sanders)

0.30.0 / 2025-05-22
===================

* [BREAKING CHANGE] Drop deprecated compound profile aliases (James D. Forrester)
  * client-common    -> client/common
  * client-es6       -> client/es6
  * mediawiki-qunit  -> mediawiki/qunit
  * vue-common       -> vue/common
  * vue-es6          -> vue/es6
  * vue3-common      -> vue3/common
  * vue3-es6         -> vue3/es6
* [BREAKING CHANGE] vue: Delete vue2 configs (Ed Sanders)

—
* client: Create client/es2017 config (Ed Sanders)
* client: Change target from ES2016 to ES2017 (James D. Forrester)

—
* README: Recommend /client instead of /client/es2016 (Ed Sanders)
* build: Re-build package-lock.json as version 3 (James D. Forrester)

0.29.1 / 2025-02-27
===================
* jquery: Rule fix: In `no-animate`, allow `stop` and `finish` when `allowScroll` (James D. Forrester)

0.29.0 / 2025-02-24
===================
* [BREAKING CHANGE] Remove ES5 configs (Ed Sanders)

—
* client: Change target from ES2015 (ES6) to ES2016 (Siddharth VP)
* server: Change target from ES2018 (Node 10) to ES2022 (Node 18) (James D. Forrester)

—
* mediawiki: set `sourceType` to `commonjs`, and enable `no-implicit-globals` (Hannah Okwelum)
* language: Add configs for ES2023 & ES2024 (Ed Sanders)
* jquery: Enable `no-done-fail` (James D. Forrester)
* jquery: Upgrade eslint-plugin-no-jquery to 3.0.2 (James D. Forrester)
* vue: Rule change: `vue/no-unsupported-features`: Target version 3.5.13, up from 2.6.11 (sportshead, James D. Forrester)

—
* build: Specify our Node supported range per CI in package.engines (James D. Forrester)
* build: Upgrade qunit from ^2.20.1 to ^2.24.1 (James D. Forrester)

0.28.2 / 2024-06-12
===================
* jquery: Upgrade eslint-plugin-no-jquery to 3.0.1 (James D. Forrester)

0.28.1 / 2024-06-10
===================
* jquery: Upgrade eslint-plugin-no-jquery to 3.0.0 (James D. Forrester)
* jquery: Raise tested version to 3.7, to match MediaWiki (James D. Forrester)

0.28.0 / 2024-06-03
===================
* [BREAKING CHANGE] Drop claimed Node 16 support (James D. Forrester)

—
* Rule fix: `vue-exports-component-directive`: Prefer `defineComponent()`
* Rule fix: `vue-exports-component-directive`: Make fixable

—
* common: Disable regex security checks (Ed Sanders)
* language: Move es-x/no-resizable-and-growable-arraybuffers to rules-es5 (Ed Sanders)
* language: Prefer arrow callbacks in ES6 (Ed Sanders)
* jquery: Enable no-extend (allowDeep: true) (Ed Sanders)

—
* common: Update eslint-plugin-unicorn to 53.0.0 (James D. Forrester)
* jest: Upgrade eslint-plugin-jest to 28.5.0 (James D. Forrester)
* jsdoc: Update eslint-plugin-jsdoc to 48.2.5 (James D. Forrester)
* json: Update eslint-plugin-json-es to 1.6.0 (James D. Forrester)
* mediawiki: Upgrade browserslist-config-wikimedia dependency to ^0.7.0 (James D. Forrester)
* mediawiki: Upgrade eslint-plugin-mediawiki to 0.7.0 (James D. Forrester)
* mocha: Upgrade eslint-plugin-mocha to 10.4.3 (James D. Forrester)
* node: Upgrade eslint-plugin-n to 17.7.0 (James D. Forrester)
* vue: Upgrade eslint-plugin-vue to 9.26.0 (James D. Forrester)
* yaml: Upgrade eslint-plugin-yml to 1.14.0 (James D. Forrester)

0.27.0 / 2024-03-29
===================
* [BREAKING CHANGE] Require Node 16, up from Node 14 (James D. Forrester)
* Upgrade ESLint to 8.57.0 (James D. Forrester)

—
* client/common: Disable es-x/no-resizable-and-growable-arraybuffers, too many false positives (James D. Forrester)

—
* jsdoc: Update eslint-plugin-jsdoc to 46.9.0 (Ed Sanders)
* node: Update eslint-plugin-n to 16.3.1 (Ed Sanders)
* common: Update eslint-plugin-unicorn to 49.0.0 (Ed Sanders)
* Raise browserslist-config-wikimedia dependency from ^0.5.1 to ^0.6.1 (James D. Forrester)
* mediawiki: Upgrade eslint-plugin-mediawiki to v0.6.0 (James D. Forrester)
* mocha: Upgrade eslint-plugin-mocha to 10.4.1 (James D. Forrester)
* vue: Upgrade eslint-plugin-vue to 9.23.0 (James D. Forrester)
* yaml: Upgrade eslint-plugin-yml to 1.13.2 (James D. Forrester)
* jest: Upgrade eslint-plugin-jest to 27.9.0 (James D. Forrester)
* language: Upgrade eslint-plugin-es-x to 7.6.0 (James D. Forrester)
* node: Upgrade eslint-plugin-n to 16.6.2 (James D. Forrester)
* build: Upgrade qunit to 2.20.1 (James D. Forrester)
* common: Upgrade eslint-plugin-unicorn to 51.0.1 (James D. Forrester)
* selenium: Upgrade eslint-plugin-wdio to 8.24.12 (James D. Forrester)
* jsdoc: Upgrade eslint-plugin-jsdoc to 48.2.1 (James D. Forrester)
* qunit: Upgrade eslint-plugin-qunit to 8.1.1 (James D. Forrester)

0.26.0 / 2023-11-14
===================

* Update ESLint to 8.53.0 (Ed Sanders)

—
* client-es6: Require empty line between ES6 class members (Bartosz Dziewoński)
* common: Remove `allowSingleLine` exception from `brace-style` (Ed Sanders)
* vue: Update eslint-plugin-vue to 9.18.1 (James D. Forrester; Ed Sanders)
  * vue3/common:
    * Add `vue/no-child-content` rule
    * Add `vue/no-expose-after-await` rule
    * Add `vue/no-reserved-component-names` rule
    * Add `vue/no-use-computed-property-like-method` rule
    * Add `vue/no-v-text-v-html-on-component` rule
    * Add `vue/prefer-import-from-vue` rule
    * Add `vue/valid-attribute-name` rule
  * vue2/common:
    * Add `vue/no-child-content` rule
    * Add `vue/no-reserved-component-names` rule
    * Add `vue/no-use-computed-property-like-method` rule
    * Add `vue/no-v-text-v-html-on-component` rule
    * Add `vue/valid-attribute-name` rule
    * Add `vue/valid-model-definition` rule
    * Add `vue/no-export-in-script-setup` rule
    * Add `vue/no-ref-as-operand` rule
    * Add `vue/no-setup-props-destructure` rule
    * Add `vue/return-in-emits-validator` rule
    * Add `vue/valid-define-emits` rule
    * Add `vue/valid-define-props` rule
* common: Update eslint-plugin-unicorn to 47.0.0 (James D. Forrester)
* yaml: Update eslint-plugin-yml from 0.14.0 to 1.10.0 (James D. Forrester; Ed Sanders)
* mocha: Update eslint-plugin-mocha from 9.0.0 to 10.2.0 (James D. Forrester)
  * Add `mocha/no-empty-description` rule
* qunit: Update eslint-plugin-qunit from 7.3.0 to 7.3.4 (James D. Forrester)
* language: Update eslint-plugin-es-x from 5.2.1 to 7.3.0 (James D. Forrester)
  * Update `server` to apply `es-x/no-hashbang` alongside `node/shebang`
* common: Require spaces in `template-curly-spacing` (Ed Sanders)
* jest: Create a 'jest' shared config (Ed Sanders)
* Node: Migrate from eslint-plugin-node to eslint-plugin-n (Ed Sanders)
* qunit: Allow the variable `hooks` to be shadowed (Ed Sanders)
* jsdoc: add `@ignore`, `@internal` and `@stable` as `definedTags` (MusikAnimal)
* Rename shared configs by grouping in folders (Ed Sanders)
* jsdoc: Update eslint-plugin-jsdoc to 42.0.0 (Ed Sanders)
  * Add `jsdoc/no-blank-block-descriptions` rule
* jest: Update eslint-plugin-jest to 27.6.0 (Ed Sanders)
* common: Update eslint-plugin-yml to 1.10.0 (Ed Sanders)

—
* build: Fix some but not all word-wrap and semver CVE issues (James D. Forrester)
* README: Drop old Travis-CI tag (James D. Forrester)
* tests: Assert that valid fixtures contain no disables (Ed Sanders)
* tests: Remove useless eslint-env browser comments (Ed Sanders)
* tests: Avoid variables named with Hungarian notation (Ed Sanders)
* tests: Simplify package.json tests (Ed Sanders)
* tests: Refactor loading of extended configs/globals (Ed Sanders)
* tests: Test upstream config for node (Ed Sanders)
* build: Update eslint-plugin-compat dependency from 4.1.4 to 4.2.0 (James D. Forrester)
* build: Add Node 20.x testing to CI (Ed Sanders)
* Raise browserslist-config-wikimedia dependency from ^0.5.0 to ^0.5.1 (James D. Forrester)
* build: Update QUnit from 2.19.4 to 2.20.0 (James D. Forrester)

0.25.1 / 2023-05-24
===================
* client-common: Disable security/detect-possible-timing-attacks (Ed Sanders)
* mediawiki: Update eslint-plugin-compat to 4.1.4 (Daimona Eaytoy)
* json: Disable security/detect-bidi-characters (Ed Sanders)

0.25.0 / 2023-04-27
===================

* client: Change default from ES5 to ES6 (James D. Forrester)
* common: Also inherit from plugin:security/recommended (James D. Forrester)
* mediawiki: Upgrade browserslist-config-wikimedia for `compat/compat` rule (Ed Sanders)
* mediawiki: Upgrade eslint-plugin-mediawiki to v0.5.0 (James D. Forrester)
* mediawiki: Use only ES6 browsers for `compat/compat` (Roan Kattouw)
* mediawiki: Use upstream shared configs `common` and `vue` (Ed Sanders)
* mediawiki-qunit: new preset (ES2022 async-await in unit tests) (Timo Tijhof)
* qunit: Update eslint-plugin-qunit to 7.3.0 or later (Timo Tijhof)

0.24.0 / 2023-01-17
===================

* Drop support for Node 12 (Ed Sanders)
* Update ESLint to 8.31.0 (Ed Sanders)

—
* jsdoc: Update eslint-plugin-jsdoc to 39.2.2 (Ed Sanders)
* language: Remove reference to non-existent "restrict-to-es2022" (Ed Sanders)
* language: Disable es-x/no-symbol-prototype-description (Ed Sanders)
* language: Replace es-x/no-array-prototype-keys/values with no-restricted-syntax (Ed Sanders)

—
* build: Test in Node 18 (Active LTS) (Ed Saners)

0.23.0 / 2022-07-30
===================

* Update ESLint to 8.14.0 (Ed Sanders)

—
* client-es6: Use vue-es6 instead of vue3-es6 (Roan Kattouw)
* common: Enable `no-constant-binary-expression` (Ed Sanders)
* common: Update eslint-plugin-unicorn to 42.0.0 (Ed Sanders)
* common: Lint dot files by default (Ed Sanders)
* common: Add stylelint- comments to max-len ignorePattern (Roan Kattouw)
* jsdoc: Update eslint-plugin-jsdoc to 38.1.6 (Ed Sanders)
* json: Update eslint-plugin-json-es from 1.5.4 to 1.5.7 (Ed Sanders)
* language: Add es2022 config (Ed Sanders)
* language: Replace eslint-plugin-es with eslint-plugin-es-x (Ed Sanders)
* language: Simplify language rules (Ed Sanders)
* mediawiki: Upgrade eslint-plugin-mediawiki to v0.4.0 (James D. Forrester)
* mediawiki: Add "exports" global (Roan Kattouw)
* mediawiki: Update browserslist-config-wikimedia to 0.4.0 (Ed Sanders)
* mediawiki: Get browsers list from browserslist-config-wikimedia (Ed Sanders)
* selenium: Update eslint-plugin-wdio to 7.19.4 (Ed Sanders)
* vue: Use Vue 3 by default (Roan Kattouw)
* vue: Update eslint-plugin-vue to 8.7.1 (Ed Sanders)
* yaml: Update eslint-plugin-yml from 0.13.0 to 0.14.0 (Ed Sanders)

—
* build: Run tests before linting (Ed Sanders)
* docs: Add back the possessive for the missing files error message (James D. Forrester)
* tests: Fix inconsistent whitespace in ignore comments (Ed Sanders)
* tests: Update qunit from 2.17.2 to 2.18.2 (Ed Sanders)
* tests: Fix typo in test (Ed Sanders)
* tests: Add tests for languages/es5 (Ed Sanders)

0.22.1 / 2022-02-08
===================

* vue: Update for new rules in eslint-plugin-vue 8.4.1 (Roan Kattouw)

—
* build: Add missing yaml.json to package files (Ed Sanders)
* tests: Check that all files are included in package.json's files list (Ed Sanders)

0.22.0 / 2022-02-07
===================

* Update ESLint to 8.6.0 (Ed Sanders)

—
* common: Add eslint-plugin-yml to lint YAML files (Petr Pchelko)
* common: Disable no-use-before-define for functions (Ed Sanders)
* common: Update eslint-plugin-unicorn to 40.1.0 (Ed Sanders)
* jsdoc: Update eslint-plgin-jsdoc to 37.7.1 (Ed Sanders)
* mediawiki: Update eslint-plugin-compat to 4.0.2 (Ed Sanders)
* qunit: Update eslint-plugin-qunit to 7.2.0 (Ed Sanders)
* vue: Enforce component-name-in-template-casing (Roan Kattouw)
* vue: Update eslint-plugin-vue to 8.4.1 (Roan Kattouw)

—
* tests: Add test to show that YAML delibrately enforces max-len

0.21.0 / 2021-10-28
===================

* Update ESLint to 7.32 (Ed Sanders)
* Drop Node 10 support (Ed Sanders)

—
* client-es6: De-deduplicate comment in client-es6/valid.js (Ed Sanders)
* client: Enable `unicorn/no-invalid-remove-event-listener` (Ed Sanders)
* common/es6: Enable 5 rules from eslint-plugin-unicorn (Ed Sanders)
* common: Remove `unicorn/no-useless-undefined` (Ed Sanders)
* common: Consider variable hoisting when enforcing `no-shadow` (Ed Sanders)
* common: Remove `no-multi-str` rule (Timo Tijhof)
* common: Fix eslint comment exception in `max-len` (Ed Sanders)
* es2018: Enable `unicorn/no-useless-fallback-in-spread` (Ed Sanders)
* jquery: Update eslint-plugin-no-jquery to 2.7.0 (Ed Sanders)
* jsdoc: Update eslint-plugin-jsdoc to 37.0.3 (Ed Sanders)
* json: Update eslint-plugin-json-es to 1.5.4
* mediawiki: Allow long message keys in comments (Ed Sanders)
* mediawiki: Update eslint-plugin-compat to 3.13.0 (Ed Sanders)
* mediawiki: Update eslint-plugin-mediawiki to 0.3.0 (Ed Sanders)
* mocha: Update eslint-plugin-mocha to 9.0.0 (Ed Sanders)
* qunit: Update eslint-plugin-qunit to 7.0.0 (Ed Sanders)
* qunit: Enable `qunit/no-assert-ok` (Ed Sanders)
* qunit: Replace various rules with `no-loose-assertions` (Ed Sanders)
* selenium: Update eslint-plugin-wdio to 7.4.2 (Ed Sanders)
* server: Improve test coverage (Ed Sanders)
* unicorn: Update eslint-plugin-unicorn to 36.0.0 (Ed Sanders)
* vue: Allow boolean props to default to false (Roan Kattouw)
* vue: Update eslint-plugin-vue to 8.0.2 (Roan Kattouw)
* vue: Add Vue 3 support (Roan Kattouw)
* vue-common: Add new rules from upstream (Roa Kattouw)

—
* build: Auto-fix path-parse to v1.0.7 for npm audit (James D. Forrester)
* tests: Assert globals in fixtures (Ed Sanders)
* tests: Update QUnit to 2.17.2 (Ed Sanders)
* tests: mediawiki: Add test for JSON bug (Ed Sanders)
* tests: Check config files exist (Ed Sanders)

0.20.0 / 2021-04-07
===================
* Update ESLint to 7.23 (Ed Sanders)

—
* common: Allow var blocks to be split and moved (Ed Sanders)
* jquery: Update eslint-plugin-no-jquery to 2.6.0 (James D. Forrester)
* jsdoc: Update eslint-plugin-jsdoc to 32.3.0 (Ed Sanders)
* json: Update eslint-plugin-json-es to 1.5.3 (Ed Sanders)
* mediawiki: Bump MediaWiki browser versions (Ed Sanders)
* mocha: Update eslint-plugin-mocha to 8.1.0 (Ed Sanders)
* qunit: Update eslint-plugin-qunit to 6.0.0 (Ed Sanders)
* selenium: Update eslint-plugin-wdio to 7.0.0 (Ed Sanders)
* vue: Update eslint-plugin-vue to 7.8.0 (Ed Sanders)

—
* code: Update 'client' alias to 'client-es5' in various places (Ed Sanders)
* tests: Update QUnit to 2.14.1 (Ed Sanders)

0.19.0 / 2021-03-10
===================

* client: Split into client-es5 and client-es6 (Roan Kattouw)

0.18.2 / 2021-03-04
===================

* mediawiki: Upgrade eslint-plugin-mediawiki to 0.2.7 (Roan Kattouw)
* vue: Add "emits" and "setup" to order-in-components (Roan Kattouw)
* vue: Upgrade eslint-plugin-vue to 7.7.0 (Roan Kattouw)

0.18.1 / 2021-01-27
===================

* json: Disable max-len rule (Ed Sanders)
* json: Update eslint-plugin-json-es to 1.5.1 (Ed Sanders)

0.18.0 / 2021-01-21
===================

* Update ESLint to 7.17.0 (Ed Sanders)

—
* common: Only run JSON rules on JSON files (Ed Sanders)
* common: Update eslint-plugin-es to 4.1.0 (Ed Sanders)
* jquery: Test all upstream configs (Ed Sanders)
* jsdoc: Update eslint-plugin-jsdoc to 30.7.13 (Ed Sanders)
* json: Plugin renamed from @zeitport/eslint-plugin-json to eslint-plugin-json-es (Ed Sanders)
* json: Replace eslint-plugin-json with eslint-parser-json (Ed Sanders)
* json: Update eslint-plugin-json-es 1.4.0 (Ed Sanders)
* mediawiki: Add Grade A browser compatibility checks (Ed Sanders)
* mediawiki: Update eslint-plugin-compat to 3.9.0 (Ed Sanders)
* mediawiki: Update eslint-plugin-mediawiki to 0.2.6 (Ed Sanders)
* qunit: Add assertions for upstream qunit configs (Ed Sanders)
* qunit: Update eslint-plugin-qunit to 5.2.0 (Ed Sanders)
* vue: Update eslint-plugin-vue to 7.4.1 (Ed Sanders)

—
* changelog: Fix escaping (Ed Sanders)
* code: Add ES2021 support (Ed Sanders)
* tests: Mocha/selenium test improvements (Ed Sanders)
* tests: Switch tests to use QUnit (Timo Tijhof)

0.17.0 / 2020-08-17
===================

* common: Enforce `no-shadow` (Ed Sanders)
* common: Enforce `no-unreachable-loop` (Ed Sanders)
* es6: Enforce `no-promise-executor-return` (Ed Sanders)
* jquery: Update eslint-plugin-no-jquery to 2.5.9 (Ed Sanders)
* jsdoc: Remove unnecessary tagNamePreference settings (Ed Sanders)
* jsdoc: Drop `@constant`->`@const`, `@description`->`@desc` preferences (Ed Sanders)
* jsdoc: Update eslint-plugin-jsdoc to 30.2.1 (Lucas Werkmeister, Ed Sanders)
* jsdoc/jsduck: Move `@mixes`->`@Mixins` to jsduck (Ed Sanders)
* json: Update eslint-plugin-json to 2.1.2 (Ed Sanders)
* mocha: Update eslint-plugin-mocha to 8.0.0 (Ed Sanders)
* qunit: Update elsint-plugin-qunit to 4.3.0 (Ed Sanders)
* vue: Prohibit self-closing tags, but allow shorthand attributes (Roan Kattouw)

—
* code: Update to ESLint 7.5.0 (Ed Sanders)
* tests: Update mocha to 8.1.1 (Ed Sanders)

0.16.2 / 2020-06-18
===================

* mediawiki: Update eslint-plugin-mediawiki to 0.2.5 (Ed Sanders)
* vue-es5: Don't inherit from vue-es6 (Roan Kattouw)
* jsdoc: Update eslint-plugin-jsdoc to 27.1.2 (Ed Sanders)
* jsdoc: Extend from plugin:jsdoc/recommended (Ed Sanders)
* jsduck: Remove `@this`->`@context` tag preference (Ed Sanders)
* jsduck: Introduce jsduck config (Ed Sanders)

—
* code: Add ES2020 support (Ed Sanders)
* docs: Clarify scope of jQuery config (Ed Sanders)
* tests: Separate "// Rule:" comments into Valid & Off (Ed Sanders)
* tests: Various fixes (Ed Sanders)
* tests: Add assertion messages (Ed Sanders)
* tests: Update mocha to 8.0.1 (Ed Sanders)

0.16.1 / 2020-06-06
===================

* selenium: Separate out a `mocha` config from `selenium` (Ed Sanders)

—
* docs: Fix typo in README (Vidhi Mody)

0.16.0 / 2020-05-30
===================

* common: New rule `array-callback-return` (Ed Sanders)
* common: New rule `no-loss-of-precision` (Ed Sanders)
* common: Remove plugins:['json'], already inherited (Ed Sanders)
* common: Rule fix: Add `balanced: true` to spaced-comment (Ed Sanders)
* es6: New rule `arrow-spacing` (Ed Sanders)
* es6: New rule `default-param-last` (Ed Sanders)
* es6: New rule `no-constructor-return` (Ed Sanders)
* es6: New rule `no-var` (Ed Sanders)
* jquery: Update eslint-plugin-no-jquery to 2.4.1 (Ed Sanders)
* jsdoc: Replace deprecated valid-jsdoc with eslint-plugin-jsdoc (James D. Forrester, Ed Sanders)
* jsdoc: Update eslint-plugin-jsdoc to 26.0.0 (Ed Sanders)
* language: Use 'es' plugin in language/ where possible (Ed Sanders)
* mediawiki: Add OO global (Ed Sanders)
* mediawiki: Update eslint-plugin-mediawiki to 0.2.4 (James D. Forrester, Ed Sanders)
* node: New rules: Extend from eslint-plugin-node/recommended (Ed Sanders)
* qunit: Don't inherit from `common`, as that over-writes other profiles (Ed Sanders)
* qunit: Update eslint-plugin-qunit to 4.2.0 (Ed Sanders)
* selenium: Provide `selenium` profile (Ed Sanders)
* server: Increase ES verion to 2018 (Ed Sanders)
* vue: Add 'overrides' to individual configs (Ed Sanders)
* vue: Update eslint-plugin-vue to 6.2.2 (Ed Sanders)

—
* build: Simplify package.files, include all of 'language' (Ed Sanders)
* code: Consistently use tabs in JSON files (Ed Sanders)
* code: Drop file extensions in extends/require (Ed Sanders)
* code: Update to ESLint 7.0.0 (James D. Forrester, Ed Sanders)
* docs: Fix QUnit example now inheritance is fixed (Ed Sanders)
* tests: Convert tests to use Mocha (Ed Sanders)
* tests: Require 'invalid' tests for every rule except ones set to 'off' (Ed Sanders)

0.15.3 / 2020-04-15
===================

* mediawiki: Make vue rules apply only to vue files (James D. Forrester)

0.15.2 / 2020-04-15
===================

* mediawiki: Add rules for .vue files (Roan Kattouw)
* mediawiki: New rule: `mediawiki/class-doc` (Ed Sanders)
* mediawiki: New rule: `mediawiki/no-vue-dynamic-i18n` (Roan Kattouw)
* build: Set `max-warnings` to 0 (Ed Sanders)
* build: Upgrade assert-diff from 2.0.3 to 3.0.0 (James D. Forrester)

0.15.1 / 2020-03-31
===================

* Add ES6 Number & Math properties to not-es5.js (Ed Sanders)
* common: New rule: `prefer-regex-literals` (Ed Sanders)
* client: Warn against using `parentElement` in ES5 clients (Ed Sanders)
* json: Update plugin from 1.4.0 to 2.1.1 (Ed Sanders)
* jquery: Update plugin from 2.3.0 to 2.3.2 (Ed Sanders)
* mediawiki: New rule: `mediawiki/valid-package-file-require` (James D. Forrester)
* Update eslint from 6.5.1 to 6.8.0 (Ed Sanders)
* Fix merge function now we are merging whole configs (Ed Sanders)
* build: Install GitHub Actions, remove Travis (James D. Forrester)
* build: Bump acorn from 7.1.0 to 7.1.1 (dependabot[bot])
* build: Bump package-lock.json for npm audit (James D. Forrester)

0.15.0 / 2019-10-22
===================
* Create `mediawiki` profile and enable `mediawiki/msg-doc` (Ed Sanders)
* jquery: New rule `no-jquery/variable-pattern` (Ed Sanders)
* Move `reportUnusedDisableDirectives` to config (Ed Sanders)
* Update eslint from 6.2.2 to 6.5.1 (Ed Sanders)

0.14.3 / 2019-10-02
===================
* jquery: New rule `no-jquery/no-constructor-attributes` (Ed Sanders)

0.14.2 / 2019-10-02
===================
* es6: Remove `prefer-template` rule (Ed Sanders)
* jquery: Update no-jquery from 2.1.0 to 2.2.1 and don't re-apply inherited rules (Ed Sanders)
* jquery: New rule `no-jquery/no-error` (Ed Sanders)
* manifest: Set homepage to `Manual:` rather than `Manual_talk:` (James D. Forrester)

0.14.1 / 2019-08-31
===================
* manifest: Add missing base language files for es2018 and es2019 (James D. Forrester)

0.14.0 / 2019-08-27
===================
* Update eslint from 5.16.0 to 6.2.2 (Ed Sanders; James D. Forrester)
* Create rulesets for ES2018/19 (Ed Sanders)
* readme: Fix typo 2106 -> 2016 (Ed Sanders)
* build: Bump eslint-utils from 1.4.0 to 1.4.2 (dependabot[bot])

0.13.1 / 2019-07-08
===================
* Fix language rule merge when key is unset in both rulesets (Ed Sanders)

0.13.0 / 2019-07-05
===================
* es6: New rule: `prefer-const` (Holger Knust)
* es6: New rules: `no-useless-concat`, `prefer-template`, `template-curly-spacing` (Stephen Niedzielski)
* node: New rule: `no-buffer-constructor rule` (Petr Pchelko)
* jquery: New rule: `no-jquery/no-sizzle` (Ed Sanders)
* jquery: New rule: `no-jquery/no-class-state` (James D. Forrester)
* Fix ES language rules tree (Ed Sanders)
* Fix `no-restricted-properties`/`-syntax` inheritance (Ed Sanders)

0.12.0 / 2019-05-06
===================
* Provide ability to lint JSON files (James D. Forrester)
* Update eslint from 5.14.x to 5.16.x (James D. Forrester)

0.11.0 / 2019-02-20
===================
* build: Switch to renamed wikimedia/eslint-plugin-no-jquery (Ed Sanders)

—
* jquery: Enable `allowScroll` option of `no-jquery/no-animate` (Ed Sanders)

—
* Update eslint: 5.9.0 -> to 5.14.0
* Use new globals syntax (Ed Sanders)

0.10.1 / 2019-02-01
===================

* jquery: New rule `jquery/no-global-eval` (Ed Sanders)
* jquery: New rule `jquery/no-hold-ready`, `jquery/no-is-numeric` & `jquery/no-now` rules (Ed Sanders)

—
* Add "es6" env to presets for ES2015 and later (Ed Sanders)
* Document how to use Node with later versions of ES (Ed Sanders)

—
* build: Update wikimedia/eslint-plugin-jquery to wmf.6 (Ed Sanders)

0.10.0 / 2019-01-07
===================

* jquery: New rule `jquery/no-animate`, `no-animate-toggle` (Ed Sanders)
* jquery: New rule `jquery/no-fade`, `jquery/no-slide` (Ed Sanders)
* jquery: New rule `jquery/no-global-selector` (Ed Sanders)
* jquery: New rule `jquery/no-is-array`, `jquery/no-size` (Ed Sanders)
* jquery: New rule `jquery/no-parse-html-literal` (Ed Sanders)
* jquery: New rule `no-event-shorthand`, `no-noop` and `no-type` (Ed Sanders)

—
* Changed rule `quote-props` - Reverse ES3-keyword restriction (Timo Tijhof)

—
* build: Update wikimedia/eslint-plugin-jquery to wmf.5 (James D. Forrester)

0.9.0 / 2018-11-19
==================

* Implement `wikimedia/client` coding style (James D. Forrester)
* Implement `wikimedia/server` coding style (James D. Forrester)
* Implement `wikimedia/jquery` coding style (Ed Sanders)

—
* New rule: `max-statements-per-line` (Ed Sanders)
* New rule: `no-misleading-character-class` (Ed Sanders)

—
* Changed rule: `valid-jsdoc` – Add various preferred tags (Timo Tijhof)

—
* Update eslint: 5.6.0 -> 5.9.0
* Update elint-plugin-qunit: 3.3.0 -> 4.0.0
* Update assert-diff 1.2.0 -> 2.0.3
* Library sub-profile dependencies are now full dependencies instead of peerDependencies. (James D. Forrester)
* Refactor code to split into multiple profiles (James D. Forrester)
* test: Fix ESLint directive regex (Stephen Niedzielski)

0.8.1 / 2018-09-10
==================

* qunit: extend wikimedia.json (not .eslintrc.json) (Timo Tijhof)

0.8.0 / 2018-09-08
==================

* Changed rule: `quotes` – Add the 'avoidEscape' option. (James D. Forrester)
* qunit: Add the appropriate `env` setting. (James D. Forrester)

0.7.2 / 2018-08-14
==================

* Add qunit.json to "files" (Ed Sanders)

0.7.1 / 2018-08-13
==================

* No-op release bump for npmjs.com. (James D. Forrester)

0.7.0 / 2018-08-13
==================

* Implement `wikimedia/qunit` coding style (Timo Tijhof)

—
* New rule: `qunit/require-expect` (James D. Forrester)

—
* Changed rule: `valid-jsdoc` — Set preferred cases for types (Stephen Niedzielski)

—
* Removed rule: `no-catch-shadow` – Deprecated in eslint v5.1.0 (Stephen Niedzielski)
* Removed rule: `no-native-reassign` – Already inherited as `no-global-assign` (Stephen Niedzielski)
* Removed rule: `no-negated-in-lhs` – Already inherited as `no-unsafe-negation` (Stephen Niedzielski)

—
* package.json: Correct 'bugs' key (James D. Forrester)
* build: Use relative offsets in expected "invalid-results" file (Timo Tijhof)

0.6.0 / 2018-07-05
==================

* Update ESLint to version 4 (Timo Tijhof)
* Update ESLint to version 5 (James D. Forrester)

—
* New rule: `arrow-steps` (James D. Forrester)
* New rule: `max-len` (Joaquin Hernandez)
* New rule: `no-prototype-builtins` (James D. Forrester)
* New rule: `semi-style` (James D. Forrester)
* New rule: `switch-colon-spacing` (James D. Forrester)

—
* build: Add package-lock.json, expand testing to node 8, 10 (James D. Forrester)

0.5.0 / 2017-08-15
==================

* Remove explicitly defined `ecmaVersion` (Ed Sanders)

—
* Changed rule: `dot-notation` - Remove redundant allowKeywords override (Ed Sanders)
* Changed rule: `valid-jsdoc` - Validate use of `@return` (Timo Tijhof)

—
* test: Add tests for negative rules (Timo Tijhof)

0.4.0 / 2017-05-03
==================

* We now explicitly define the `ecmaVersion` as 5 (James D. Forrester)
* We removed a number of rules duplicated from `eslint:recommended` (Ed Sanders)

—
* New rule: `no-alert` (Ed Sanders)
* New rule: `no-catch-shadow` (Ed Sanders)
* New rule: `no-extend-native` (Ed Sanders)
* New rule: `no-extra-bind` (Ed Sanders)
* New rule: `no-extra-label` (Ed Sanders)
* New rule: `no-floating-decimal` (Ed Sanders)
* New rule: `no-implicit-globals` (Ed Sanders)
* New rule: `no-label-var` (Ed Sanders)
* New rule: `no-multi-str` (Ed Sanders)
* New rule: `no-native-reassign` (Ed Sanders)
* New rule: `no-negated-in-lhs` (Ed Sanders)
* New rule: `no-new-require` (Ed Sanders)
* New rule: `no-new-wrappers` (Ed Sanders)
* New rule: `no-octal-escape` (Ed Sanders)
* New rule: `no-proto` (Ed Sanders)
* New rule: `no-return-assign` (Ed Sanders)
* New rule: `no-self-compare` (Ed Sanders)
* New rule: `no-sequences` (Ed Sanders)
* New rule: `no-shadow-restricted-names` (Ed Sanders)
* New rule: `no-throw-literal` (Ed Sanders)
* New rule: `no-undef-init` (Ed Sanders)
* New rule: `no-unmodified-loop-condition` (Ed Sanders)
* New rule: `no-unused-expressions` (Ed Sanders)
* New rule: `no-useless-call` (Ed Sanders)
* New rule: `no-useless-computed-key` (Ed Sanders)
* New rule: `no-useless-concat` (Ed Sanders)
* New rule: `no-void` (Ed Sanders)
* New rule: `prefer-numeric-literals` (Ed Sanders)
* New rule: `unicode-bom` (Ed Sanders)

—
* Changed rule: `space-before-function-paren` — Also require spaces before parentheses in anonymous functions (Ed Sanders)

—
* Replaced rule: `no-spaced-func` with `func-call-spacing`, the new value upstream (Ed Sanders)

0.3.0 / 2016-11-15
==================

* We now extend `eslint:recommended` except for `no-constant-condition` (Ed Sanders)

—
* New rule: `computed-property-spacing` set to `always` (Ed Sanders)
* New rule: `no-array-constructor` (Ed Sanders)
* New rule: `no-new-object` (Ed Sanders)
* New rule: `no-script-url` (Ed Sanders)
* New rule: `no-unneeded-ternary` including for default assigment (Ed Sanders)
* New rule: `no-whitespace-before-property` (Ed Sanders)
* New rule: `object-curly-spacing` set to `always` (Ed Sanders)

—
* Changed rule: `no-multiple-empty-lines` — Also reject empty lines at the start or end of a file (Ed Sanders)

—
* test: Update sample.js to cover recently added rules (Timo Tijhof)

0.2.0 / 2016-10-27
==================

* New rule: `block-spacing` (Timo Tijhof)
* New rule: `new-cap` (Timo Tijhof)
* New rule: `new-parens` (James D. Forrester)
* New rule: `no-console` (Ed Sanders)
* New rule: `no-debugger` (Ed Sanders)
* New rule: `no-eval` (Ed Sanders)
* New rule: `no-extra-semi` (Timo Tijhof)
* New rule: `no-implied-eval` (Ed Sanders)
* New rule: `no-loop-func` (Ed Sanders)
* New rule: `no-multi-spaces` (Timo Tijhof)
* New rule: `no-new-func` (Ed Sanders)
* New rule: `no-sparse-arrays` (Ed Sanders)
* New rule: `vars-on-top` (Ed Sanders)

—
* Changed rule: `camelcase` — Make stricter by applying to properties (Ed Sanders)
* Changed rule: `space-in-parens` — Reject `foo( )` and not `foo()` (James D. Forrester)
* Changed rule: `spaced-comment` — Allow `/**` and `/*!` comment blocks (James D. Forrester)
* Changed rule: `space-unary-ops` — Make stricter by applying to "words" (Timo Tijhof)

—
* cleanup: Alphabetize rules in eslintrc (Timo Tijhof)
* test: Add comments to sample.js indicating which rules are tested (Timo Tijhof)
* README: Update Travis badge to @wikimedia (Timo Tijhof)
* Repo transferred from @markelog to @wikimedia.

0.1.0 / 2016-07-21
==================

* Initial release (markelog)
