<template>
	<div>
		<!-- eslint-disable-next-line vue/v-bind-style -->
		<a v-bind:href="foo">Foo</a>
		<!-- eslint-disable-next-line vue/v-on-style -->
		<a v-on:click="onClick">Click me</a>
		<!-- eslint-disable-next-line vue/no-unregistered-components -->
		<blah-component>
			<!-- eslint-disable-next-line vue/v-slot-style -->
			<template v-slot:default>
				foo
			</template>
			<!-- eslint-disable-next-line vue/v-slot-style -->
			<template v-slot:bar>
				bar
			</template>
		</blah-component>
		<!-- eslint-disable-next-line vue/html-self-closing -->
		<p v-i18n-html:foo />
		<!-- eslint-disable-next-line vue/html-self-closing, vue/no-unregistered-components -->
		<blah-component />
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
module.exports = {
	components: {
		BlahComponent: {}
	}
};
</script>
