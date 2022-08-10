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

		// Tabs for indentation (with some TypeScript adjustments)
		// See: https://github.com/typescript-eslint/typescript-eslint/issues/1824
		'indent': 'off',
		'@typescript-eslint/indent': ['warn', 'tab', {
			SwitchCase: 1,
			ignoredNodes: ['TSTypeParameterInstantiation'],
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

		// Require defining identifiers before usage (exception for type definitions)
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error', {
			typedefs: false,
		}],

		// Omit semicolons
		'semi': 'off',
		'@typescript-eslint/semi': ['warn', 'never'],
	},
}
