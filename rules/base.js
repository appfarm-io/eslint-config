module.exports = {
	rules: {
		// Allow both block bodies and single expressions in arrow functions
		'arrow-body-style': 'off',

		// Do not enforce parentheses around arrow function parameters
		'arrow-parens': 'off',

		// Enforce camelcase (exception for Appfarm conventions)
		'camelcase': ['warn', {
			allow: ['^\\$af_', '^af_', '^e_', '^p_', '_id$'],
		}],

		// Allow class methods to not use `this`
		'class-methods-use-this': 'off',

		// Enforce dangling commas (except between function arguments)
		'comma-dangle': ['warn', {
			arrays: 'always-multiline',
			exports: 'always-multiline',
			functions: 'never',
			imports: 'always-multiline',
			objects: 'always-multiline',
		}],

		// Do not require default case in switch statements
		'default-case': 'off',

		// Allow non-last default params
		'default-param-last': 'off',

		// Allow object indexing with fixed property names
		'dot-notation': 'off',

		// Require consistent usage of linebreaks for function parens
		'function-paren-newline': ['warn', 'consistent'],

		// Allow dangling arrow function bodies
		'implicit-arrow-linebreak': 'off',

		// Do not require extensions for JavaScript / TypeScript files
		'import/extensions': ['error', {
			js: 'never',
			json: 'always',
			ts: 'never',
		}],

		// Allow dynamic requires (scarcely)
		'import/no-dynamic-require': 'off',

		// Do not require string describe/test titles
		'jest/valid-title': 'off',

		// Allow multiple classes per file
		'max-classes-per-file': 'off',

		// Maximum line length
		'max-len': ['warn', 115, {
			ignoreComments: true,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			tabWidth: 2,

		}],

		// Allow chained calls
		'newline-per-chained-call': 'off',

		// Allow lone blocks
		'no-lone-blocks': 'off',

		// Ignore 'confusing' conditionals with single-argument arrow functions
		'no-confusing-arrow': 'off',

		// Allow else-return blocks
		'no-else-return': 'off',

		// Allow lonely if-statements in an else-block
		'no-lonely-if': 'off',

		// Tabs for indentation
		'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
		'no-tabs': ['off'],
		'indent': ['warn', 'tab', {
			SwitchCase: 1,
		}],

		// Allow multi-line strings
		'no-multi-str': 'off',

		// Allow nested ternaries
		'no-nested-ternary': 'off',

		// Allow reassigning parameters
		'no-param-reassign': 'off',

		// Allow concatenation of path segments without path module
		'no-path-concat': 'off',

		// Allow common operators
		'no-plusplus': 'off',

		// Disallow specific export names
		'no-restricted-exports': ['error', {
			restrictedNamedExports: [
				'then', // confusion when dynamically `import()`ed, and breaks most Node ESM versions
			],
		}],

		// Disallow various constructs
		'no-restricted-syntax': ['error',
			'ForInStatement',
			'LabeledStatement',
			'WithStatement',
		],

		// Disallow return assignments unless enclosed in parens
		'no-return-assign': ['warn', 'except-parens'],

		// Allow shadowing
		'no-shadow': 'off',

		// Allow initializing to `undefined`
		'no-undef-init': 'off',

		// Allow dangling underscores (e.g `_id` or `__hash`)
		'no-underscore-dangle': 'off',

		// Disallow unused expressions (except for short-circuits)
		'no-unused-expressions': ['error', {
			allowShortCircuit: true,
		}],

		// Enforce using variables, allow unused arguments
		'no-unused-vars': ['warn', {
			vars: 'all',
			args: 'none',
		}],

		// Allow using functions before they are defined (hoisting)
		'no-use-before-define': ['error', {
			classes: true,
			functions: false,
		}],

		// Do not require newlines in object literals
		'object-curly-newline': 'off',

		// Do not require object property/value shorthand
		'object-shorthand': 'off',

		// Allow free operator placement
		'operator-linebreak': 'off',

		// Allow arbitrary property quoting
		'quote-props': 'off',

		// Do not require arrow function callbacks
		'prefer-arrow-callback': 'off',

		// Do not require destructuring
		'prefer-destructuring': 'off',

		// Allow regular string concatenation
		'prefer-template': 'off',

		// Omit semicolons
		'semi': ['warn', 'never'],

		// Do not enforce spaced comments
		'spaced-comment': 'off',
	},
	overrides: [
		{
			files: ['**/*.test.js'],
			env: {
				jest: true,
			},
		},
	],
}
