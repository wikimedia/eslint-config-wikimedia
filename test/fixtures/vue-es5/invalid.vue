<template>
	<div>
		<!-- eslint-disable-next-line vue/no-restricted-syntax -->
		<a @click="[].keys() ? 23 : 42" />
		<!-- eslint-disable-next-line vue/no-restricted-syntax -->
		<a @click="[].values() ? 23 : 42" />
		<!-- eslint-disable-next-line vue/no-restricted-syntax -->
		<a @click="[].find( function () {} )" />
		<!-- eslint-disable-next-line vue/no-restricted-syntax -->
		<a @click="''.includes( 'x' )" />
	</div>
</template>

<script>
// @vue/component
module.exports = {
};
</script>
