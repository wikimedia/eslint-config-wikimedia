<template>
	<div x="y">
		<!-- Valid: vue/component-tags-order -->
		<!-- Valid: vue/html-indent -->
		<!-- Valid: vue/max-attributes-per-line -->
		<!-- Valid: vue/html-self-closing -->
		<span a="b" c="d" />
		<!-- Off: vue/html-closing-bracket-newline -->
		<span
			a="b"
			c="d"
			e="f"
		/>
		<!-- Valid: vue/v-on-function-call -->
		<a @click="foo">Click me</a>
		<!-- Valid: vue/component-name-in-template-casing -->
		<!-- Valid: vue/no-v-text-v-html-on-component -->
		<BlahComponent />
		<!-- Valid: vue/no-child-content -->
		<!--
			This line asserts valid code for the no-child-content rule, but there's no way
			to do that without running afoul of the no-v-html rule
		-->
		<!-- eslint-disable-next-line vue/no-v-html !allowdisable -->
		<p v-html="foo" />
		<!-- Valid: vue/prefer-separate-static-class -->
		<div class="myDiv" :class="foo" />
		<!-- Valid: vue/padding-line-between-blocks -->
	</div>
</template>

<script>
// @vue/component
module.exports = {
	// Valid: vue/order-in-components
	el: '',
	name: 'ValidTest',
	parent: null,
	functional: false,
	delimiters: [],
	comments: [],
	components: {
		BlahComponent: {}
	},
	directives: {},
	filters: {},
	extends: null,
	mixins: [],
	provide: {},
	inject: {},
	inheritAttrs: {},
	model: '',
	props: {},
	propsData: {},
	data: function () {
		return {};
	},
	computed: {},
	methods: {},
	watch: {},
	fetch: {},
	beforeCreate: function () {},
	created: function () {},
	beforeMount: function () {},
	mounted: function () {},
	beforeUpdate: function () {},
	updated: function () {},
	activated: function () {},
	deactivated: function () {},
	template: '',
	render: function ( h ) {
		return h( 'div' );
	},
	renderError: function () {}

};
</script>

<style>

</style>
