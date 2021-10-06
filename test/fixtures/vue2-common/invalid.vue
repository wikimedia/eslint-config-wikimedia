<template>
	<!-- eslint-disable-next-line vue/html-indent, vue/max-attributes-per-line -->
	<div one="1" :two="quux2" three="3"
		foo="bar">
		<!-- eslint-disable-next-line vue/no-duplicate-attr-inheritance -->
		<blah-component v-bind="$attrs">
			<!-- eslint-disable-next-line max-len -->
			<!-- eslint-disable-next-line vue/no-deprecated-slot-attribute, vue/no-useless-template-attributes -->
			<template slot="foo" x="y">
				foo
			</template>
			<!-- eslint-disable-next-line vue/no-deprecated-scope-attribute -->
			<template #whee="bar" scope="baz">
				{{ baz }}
			</template>
			<!-- eslint-disable-next-line vue/no-deprecated-slot-scope-attribute -->
			<template #quux="bar" slot-scope="baz">
				{{ baz }}
			</template>
		</blah-component>
		<!-- eslint-disable-next-line vue/no-unregistered-components -->
		<foo-component />
		<!-- eslint-disable-next-line vue/no-static-inline-styles -->
		<span style="color: red">Red</span>
		<!-- eslint-disable-next-line vue/no-unused-refs, vue/v-on-function-call -->
		<a ref="link" @click="foo()">Click me</a>
		<!-- eslint-disable-next-line vue/no-multiple-objects-in-class -->
		<a :class="[ { foo: 'bar' }, { baz: 'quux' } ]" />
		<!-- eslint-disable-next-line vue/no-unsupported-features, vue/no-v-model-argument -->
		<blah-component v-model:foo="bar" />
		<!-- eslint-disable-next-line vue/no-useless-mustaches -->
		{{ 'hello' }}
		<!-- eslint-disable-next-line vue/no-useless-v-bind, vue/no-v-text -->
		<a :class="'foo'" v-text="bar" />
	</div>
</template><!-- eslint-disable-next-line vue/padding-line-between-blocks -->
<style>
</style>

<!-- eslint-disable-next-line vue/component-tags-order -->
<script>
import Vue from 'vue';

// @vue/component
module.exports = {
	// eslint-disable-next-line max-len
	// eslint-disable-next-line vue/no-reserved-component-names, vue/component-definition-name-casing
	name: 'div',
	model: {
		// eslint-disable-next-line vue/no-invalid-model-keys
		foo: 'bar'
	},
	props: {
		foo: {
			type: Boolean,
			// eslint-disable-next-line vue/no-boolean-default
			default: false
		},
		// eslint-disable-next-line vue/no-unused-properties
		foo2: {
			type: String,
			required: true
		}
	},
	computed: {
		quux1: function () {
			// eslint-disable-next-line vue/valid-next-tick
			Vue.nextTick();
			return 42;
		},
		quux2: function () {
			// eslint-disable-next-line vue/no-use-computed-property-like-method
			return this.quux1() / 2;
		}
	},
	// eslint-disable-next-line vue/order-in-components
	components: {
		// eslint-disable-next-line vue/no-reserved-component-names, vue/no-unused-components
		button: {},
		BlahComponent: {}
	}
};
</script>
