<template>
	<div>
		<!-- eslint-disable-next-line vue/v-bind-style -->
		<a v-bind:href="foo">Foo</a>
		<!-- eslint-disable-next-line vue/v-on-style -->
		<a v-on:click="onClick">Click me</a>
		<!-- eslint-disable-next-line vue/no-unregistered-components -->
		<foo-component>
			<!-- eslint-disable-next-line vue/v-slot-style -->
			<template v-slot:default>
				foo
			</template>
			<!-- eslint-disable-next-line vue/v-slot-style -->
			<template v-slot:bar>
				bar
			</template>
		</foo-component>
		<!-- eslint-disable-next-line vue/html-self-closing -->
		<p v-i18n-html:foo />
		<!-- eslint-disable-next-line vue/html-self-closing -->
		<blah-component />
		<!-- eslint-disable-next-line vue/component-name-in-template-casing -->
		<BlahComponent></BlahComponent>
		<!-- eslint-disable-next-line vue/no-child-content, vue/no-v-html -->
		<p v-html="foo">
			bar
		</p>
		<!-- eslint-disable-next-line vue/no-child-content -->
		<p v-i18n-html:foo>
			bar
		</p>
		<!-- eslint-disable-next-line mediawiki/no-vue-dynamic-i18n -->
		<p>{{ $i18n( foo ) }}</p>
		<!-- eslint-disable-next-line mediawiki/no-vue-dynamic-i18n -->
		<p v-i18n-html:[foo]></p>
	</div>
</template>

<script>
// eslint-disable-next-line mediawiki/valid-package-file-require
require( './invalid' );
// eslint-disable-next-line mediawiki/vue-exports-component-directive
module.exports = {};

// @vue/component
module.exports = {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Invalid',
	components: {
		BlahComponent: {}
	}
};
</script>
