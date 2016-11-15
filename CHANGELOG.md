# Changelog

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
