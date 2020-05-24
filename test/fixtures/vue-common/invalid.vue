<template>
	<div>
		<blah-component>
			<!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
			<template slot="foo">
				foo
			</template>
			<!-- eslint-disable-next-line vue/no-deprecated-scope-attribute -->
			<template v-slot:name="bar" scope="baz">
				{{ baz }}
			</template>
			<!-- eslint-disable-next-line vue/no-deprecated-slot-scope-attribute -->
			<template v-slot:name="bar" slot-scope="baz">
				{{ baz }}
			</template>
		</blah-component>
		<!-- eslint-disable-next-line vue/no-static-inline-styles -->
		<span style="color: red">Red</span>
		<!-- eslint-disable-next-line vue/v-on-function-call -->
		<a @click="foo()">Click me</a>
		<!-- eslint-disable-next-line vue/no-unsupported-features -->
		<!-- Can't actually be covered, since it doesn't do anything (yet) when set to v2.6 -->
	</div>
</template>

<style>
</style>

<!-- eslint-disable-next-line vue/component-tags-order -->
<script>
// @vue/component
module.exports = {
	// eslint-disable-next-line vue/no-reserved-component-names, vue/name-property-casing
	name: 'div',
	props: {
		foo: {
			type: Boolean,
			// eslint-disable-next-line vue/no-boolean-default
			default: false
		}
	},
	// eslint-disable-next-line vue/order-in-components
	components: {
		// eslint-disable-next-line vue/no-reserved-component-names, vue/no-unused-components
		button: {}
	}
};
</script>
