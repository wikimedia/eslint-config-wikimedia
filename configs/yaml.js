import pluginYml from 'eslint-plugin-yml';
import yamlParser from 'yaml-eslint-parser';

export default [
	{
		name: 'wikimedia/yaml',
		files: [ '**/*.yaml', '**/*.yml' ],
		...pluginYml.configs['flat/standard'],
		languageOptions: {
			parser: yamlParser
		},
		rules: {
			...pluginYml.configs['flat/standard'].rules,
			'yml/flow-sequence-bracket-spacing': [ 'error', 'always' ],
			'yml/flow-mapping-curly-spacing': [ 'error', 'always' ]
		}
	}
];

