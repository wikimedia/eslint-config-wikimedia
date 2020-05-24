<template>
	<div x="y">
		<!-- Rule: vue/component-tags-order -->
		<!-- Rule: vue/html-indent -->
		<!-- Rule: vue/max-attributes-per-line -->
		<!-- Rule: vue/html-self-closing -->
		<span a="b" c="d" />
		<!-- Rule: vue/html-closing-bracket-newline -->
		<span
			a="b"
			c="d"
			e="f"
		/>
		<!-- Rule: vue/v-on-function-call -->
		<a @click="foo">Click me</a>
		<!-- Rule: vue/padding-line-between-blocks -->
	</div>
</template>

<script>
// @vue/component
module.exports = {
	// Rule: vue/order-in-components
	el: '',
	name: '',
	parent: null,
	functional: false,
	delimiters: [],
	comments: [],
	components: {},
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
	beforeDestroy: function () {},
	destroyed: function () {},
	template: '',
	render: function ( h ) {
		return h( 'div' );
	},
	renderError: function () {}

};
</script>

<style>

</style>
