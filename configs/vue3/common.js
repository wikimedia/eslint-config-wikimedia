import pluginVue from 'eslint-plugin-vue';
import vueCommon from '../vue/common.js';

export default [
	{
		name: 'wikimedia/vue3/common',
		files: [ '**/*.vue' ],
		...pluginVue.configs['flat/vue3-recommended'],
		rules: {
			...vueCommon[0].rules,
			...pluginVue.configs['flat/vue3-recommended'].rules,
			'vue/no-unsupported-features': [ 'error', {
				version: '3.5.13'
			} ]
		}
	}
];

