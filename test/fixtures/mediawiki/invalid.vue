<template>
	<div>
		<!-- eslint-disable-next-line vue/v-bind-style -->
		<a :href="foo">Foo</a>
		<!-- eslint-disable-next-line vue/v-on-style -->
		<a @click="onClick">Click me</a>
		<blah-component>
			<!-- eslint-disable-next-line vue/v-slot-style -->
			<template #default>
				foo
			</template>
			<!-- eslint-disable-next-line vue/v-slot-style -->
			<template #bar>
				bar
			</template>
		</blah-component>
		<!-- eslint-disable-next-line mediawiki/no-vue-dynamic-i18n -->
		<p>{{ $i18n( foo ) }}</p>
		<!-- eslint-disable-next-line mediawiki/no-vue-dynamic-i18n -->
		<p v-i18n-html:[foo] />
	</div>
</template>

<script>
// @vue/component
module.exports = {
};
</script>
