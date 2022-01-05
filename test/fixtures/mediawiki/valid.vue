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
		<p v-i18n-html:foo></p>
		<!-- Valid: vue/component-name-in-template-casing -->
		<blah-component></blah-component>
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
// eslint-disable-next-line no-unused-vars
function x() {}
</script>

<style>

</style>
