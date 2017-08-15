# Changelog

## 0.5.0 / 2017-08-15
* Remove explicitly defined `ecmaVersion` (Ed Sanders)

* Changed rule: `dot-notation` - Remove redundant allowKeywords override (Ed Sanders)
* Changed rule: `valid-jsdoc` - Validate use of `@return` (Timo Tijhof)

* test: Add tests for negative rules (Timo Tijhof)


## 0.4.0 / 2017-05-03
* We now explicitly define the `ecmaVersion` as 5 (James Forrester)
* We removed a number of rules duplicated from `eslint:recommended` (Ed Sanders)

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

* Changed rule: `space-before-function-paren` — Also require spaces before parentheses in anonymous functions (Ed Sanders)

* Replaced rule: `no-spaced-func` with `func-call-spacing`, the new value upstream (Ed Sanders)


## 0.3.0 / 2016-11-15
* We now extend `eslint:recommended` except for `no-constant-condition` (Ed Sanders)

* New rule: `computed-property-spacing` set to `always` (Ed Sanders)
* New rule: `no-array-constructor` (Ed Sanders)
* New rule: `no-new-object` (Ed Sanders)
* New rule: `no-script-url` (Ed Sanders)
* New rule: `no-unneeded-ternary` including for default assigment (Ed Sanders)
* New rule: `no-whitespace-before-property` (Ed Sanders)
* New rule: `object-curly-spacing` set to `always` (Ed Sanders)

* Changed rule: `no-multiple-empty-lines` — Also reject empty lines at the start or end of a file (Ed Sanders)

* test: Update sample.js to cover recently added rules (Timo Tijhof)


## 0.2.0 / 2016-10-27
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

* Changed rule: `camelcase` — Make stricter by applying to properties (Ed Sanders)
* Changed rule: `space-in-parens` — Reject `foo( )` and not `foo()` (James D. Forrester)
* Changed rule: `spaced-comment` — Allow `/**` and `/*!` comment blocks (James D. Forrester)
* Changed rule: `space-unary-ops` — Make stricter by applying to "words" (Timo Tijhof)

* cleanup: Alphabetize rules in eslintrc (Timo Tijhof)
* test: Add comments to sample.js indicating which rules are tested (Timo Tijhof)
* README: Update Travis badge to @wikimedia (Timo Tijhof)
* Repo transferred from @markelog to @wikimedia.


## 0.1.0 / 2016-07-21
* Initial release (markelog)
