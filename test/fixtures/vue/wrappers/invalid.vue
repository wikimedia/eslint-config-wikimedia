<template>
	<div>
		<!-- eslint-disable-next-line vue/array-bracket-spacing, vue/comma-spacing -->
		<div :class="[foo ,bar]" />
		<!-- eslint-disable-next-line vue/key-spacing, vue/object-curly-spacing -->
		<a :class="{foo:'bar'}" />
		<!-- eslint-disable-next-line vue/eqeqeq -->
		<a :class="foo == 4 ? 8 : 15" />
		<!-- eslint-disable-next-line vue/dot-location, vue/first-attribute-linebreak -->
		<a :href="foo.
			bar" />
		<!-- eslint-disable-next-line vue/dot-notation -->
		<a :href="foo['bar']" />
		<!-- eslint-disable vue/comma-style, vue/first-attribute-linebreak, vue/quote-props -->
		<a :class="{ 'foo': 'bar'
			, baz: 'quux' }" />
		<!-- eslint-disable-next-line max-len -->
		<!-- eslint-disable-next-line vue/block-spacing, vue/keyword-spacing, vue/space-in-parens, vue/func-call-spacing -->
		<a @click="if(foo){bar ()}" />
		<!-- eslint-disable vue/brace-style -->
		<!-- eslint-disable-next-line vue/no-constant-condition -->
		<a @click="if ( false )
		{
			bar()
		}" />
		<!-- eslint-disable-next-line vue/camelcase, vue/no-useless-concat -->
		<a @click="function foo_bar() { return 'foo' + 'bar'; }" />
		<!-- eslint-disable-next-line vue/space-infix-ops -->
		<a :href="16+23" />
		<!-- eslint-disable-next-line vue/space-unary-ops -->
		<a :href="! x" />
		<!-- eslint-disable-next-line vue/comma-dangle -->
		<div :class="[ foo, bar, ]" />
		<!-- eslint-disable-next-line vue/no-multi-spaces -->
		<a :href="16  + 23" />
		<!-- eslint-disable vue/operator-linebreak -->
		<a :href="16
			+ 23" />
	</div>
</template>

<script>
// @vue/component
module.exports = {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Invalid'
};
</script>
