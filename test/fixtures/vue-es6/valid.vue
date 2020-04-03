<template>
	<div>
		<!-- Rule: vue/no-restricted-syntax -->
		<a @click="[].keys() ? 23 : 42" />
		<a @click="[].values() ? 23 : 42" />
		<a @click="[].find( function () {} )" />
	</div>
</template>

<script>
// @vue/component
module.exports = {
};
</script>
