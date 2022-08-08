module.exports = {
	rules: {
		// Allow non-last default params
		'@typescript-eslint/default-param-last': 'off',

		// Allow object indexing with fixed property names
		'@typescript-eslint/dot-notation': 'off',

		// Allow grouped class members
		'@typescript-eslint/lines-between-class-members': 'off',

		// Allow shadowing
		'@typescript-eslint/no-shadow': 'off',

		// Enforce camelcase (exception for Appfarm conventions)
		'camelcase': 'off',
		'@typescript-eslint/naming-convention': ['warn',
			{
				selector: 'default',
				format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'allow',
				filter: {
					regex: '^\\$af_|^af_|^e_|^p_|^svrApi_|_id$',
					match: false,
				},
			},
			{
				selector: 'property',
				format: null,
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
				filter: {
					regex: '^e_',
					match: false,
				},
			},
		],

		// Enforce dangling commas (except between function arguments)
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': ['warn', {
			arrays: 'always-multiline',
			enums: 'always-multiline',
			exports: 'always-multiline',
			functions: 'never',
			generics: 'always-multiline',
			imports: 'always-multiline',
			objects: 'always-multiline',
			tuples: 'always-multiline',
		}],

		// Tabs for indentation
		'indent': 'off',
		'@typescript-eslint/indent': ['warn', 'tab', {
			SwitchCase: 1,
		}],

		// Disallow unused expressions (except for short-circuits)
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': ['error', {
			allowShortCircuit: true,
		}],

		// Enforce using variables, allow unused arguments
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', {
			vars: 'all',
			args: 'none',
		}],

		// Omit semicolons
		'semi': 'off',
		'@typescript-eslint/semi': ['warn', 'never'],
	},
}
