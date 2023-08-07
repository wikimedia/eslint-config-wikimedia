<template>
	<div>
		<!-- Valid: vue/v-bind-style -->
		<a :href="foo">Foo</a>
		<!-- Valid: vue/v-on-style -->
		<a @click="onClick">Click me</a>
		<blah-component>
			<!-- Valid: vue/v-slot-style -->
			<template #default>
				foo
			</template>
			<template #bar>
				bar
			</template>
		</blah-component>
		<!-- Valid: vue/html-self-closing -->
		<!-- Valid: vue/component-name-in-template-casing -->
		<blah-component></blah-component>
		<!-- Valid: vue/no-child-content -->
		<!--
			This line asserts valid code for the no-child-content rule, but there's no way
			to do that without running afoul of the no-v-html rule
		-->
		<!-- eslint-disable-next-line vue/no-v-html !allowdisable -->
		<p v-html="foo"></p>
		<p v-i18n-html:foo></p>
	</div>
</template>

<script>
// @vue/component
module.exports = {
	name: 'TestValid',
	components: {
		BlahComponent: {}
	}
};

// Off: no-implicit-globals
function x() {}
// Avoid triggering no-unused-vars
x();
</script>

<style>

</style>
