<template>
	<div>
		<!-- Valid: vue/v-bind-style -->
		<a v-bind:href="foo">Foo</a>
		<!-- Valid: vue/v-on-style -->
		<a v-on:click="onClick">Click me</a>
		<blah-component>
			<!-- Valid: vue/v-slot-style -->
			<template v-slot:default>
				foo
			</template>
			<template v-slot:bar>
				bar
			</template>
		</blah-component>
	</div>
</template>

<script>
// @vue/component
module.exports = {

};

// Off: no-implicit-globals
// eslint-disable-next-line no-unused-vars
function x() {}
</script>

<style>

</style>
