<template>
	<div>
		<!-- Valid: vue/array-bracket-spacing -->
		<!-- Valid: vue/comma-dangle -->
		<div :class="[ foo, bar ]" />
		<!-- Valid: vue/key-spacing -->
		<!-- Valid: vue/object-curly-spacing -->
		<!-- Valid: vue/quote-props -->
		<a :class="{ foo: 'bar' }" />
		<!-- Valid: vue/eqeqeq -->
		<a :class="foo === 4 ? 8 : 15" />
		<!-- Valid: vue/dot-location -->
		<a
			:href="foo
				.bar"
		/>
		<!-- Valid: vue/block-spacing -->
		<!-- Valid: vue/keyword-spacing -->
		<a @click="if ( foo ) { bar() }" />
		<!-- Valid: vue/brace-style -->
		<a
			@click="if ( foo ) {
				bar()
			}"
		/>
		<!-- Valid: vue/camelcase -->
		<a @click="function fooBar() { }" />
		<!-- Valid: vue/space-infix-ops -->
		<a :href="16 + 23" />
		<!-- Valid: vue/space-unary-ops -->
		<a :href="typeof 42" />
		<a :href="!x" />
	</div>
</template>

<script>
// @vue/component
module.exports = {
	// Valid: vue/multi-word-component-names
	name: 'ValidTest'
};
</script>
