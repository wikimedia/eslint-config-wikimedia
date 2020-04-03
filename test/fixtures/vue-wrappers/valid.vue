<template>
	<div>
		<!-- Rule: vue/array-bracket-spacing -->
		<!-- Rule: vue/comma-dangle -->
		<div :class="[ 'foo', 'bar' ]" />
		<!-- Rule: vue/key-spacing -->
		<!-- Rule: vue/object-curly-spacing -->
		<a :class="{ foo: 'bar' }" />
		<!-- Rule: vue/eqeqeq -->
		<a :class="foo === 4 ? 8 : 15" />
		<!-- Rule: vue/dot-location -->
		<a :href="foo
			.bar" />
		<!-- Rule: vue/block-spacing -->
		<!-- Rule: vue/keyword-spacing -->
		<a @click="if ( foo ) { bar() }" />
		<!-- Rule: vue/brace-style -->
		<a @click="if ( foo ) {
			bar()
		}" />
		<!-- Rule: vue/camelcase -->
		<a @click="function fooBar() { }" />
		<!-- Rule: vue/space-infix-ops -->
		<a :href="16 + 23" />
		<!-- Rule: vue/space-unary-ops -->
		<a :href="typeof 42" />
		<a :href="!x" />
	</div>
</template>

<script>
// @vue/component
module.exports = {

};
</script>
