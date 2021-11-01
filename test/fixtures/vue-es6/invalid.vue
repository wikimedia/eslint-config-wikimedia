<template>
	<div>
		<!-- eslint-disable-next-line vue/no-restricted-syntax -->
		<a @click="[].includes( 'x' )" />
	</div>
</template>

<script>
// @vue/component
module.exports = {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Invalid'
};
</script>
