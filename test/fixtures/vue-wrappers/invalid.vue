<template>
	<div>
		<!-- eslint-disable-next-line vue/array-bracket-spacing -->
		<div :class="['foo', 'bar']" />
		<!-- eslint-disable-next-line vue/key-spacing, vue/object-curly-spacing -->
		<a :class="{foo:'bar'}" />
		<!-- eslint-disable-next-line vue/eqeqeq -->
		<a :class="foo == 4 ? 8 : 15" />
		<!-- eslint-disable-next-line vue/dot-location -->
		<a :href="foo.
			bar" />
		<!-- eslint-disable-next-line vue/block-spacing, vue/keyword-spacing -->
		<a @click="if(foo){bar()}" />
		<!-- eslint-disable vue/brace-style -->
		<a @click="if ( foo )
		{
			bar()
		}" />
		<!-- eslint-disable-next-line vue/camelcase -->
		<a @click="function foo_bar() { }" />
		<!-- eslint-disable-next-line vue/space-infix-ops -->
		<a :href="16+23" />
		<!-- eslint-disable-next-line vue/space-unary-ops -->
		<a :href="! x" />
		<!-- eslint-disable-next-line vue/comma-dangle -->
		<div :class="[ 'foo', 'bar', ]" />
		<!-- eslint-disable-next-line vue/no-multi-spaces -->
		<a :href="16  + 23" />
	</div>
</template>

<script>
// @vue/component
module.exports = {

};
</script>
