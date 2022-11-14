module.exports = {
	rules: {
		// Do not require destructuring state / props
		'react/destructuring-assignment': 'off',

		// Loose function component definitions
		'react/function-component-definition': 'off',

		// Enforce curly spacing for children and disallow for attributes
		'react/jsx-curly-spacing': [
			'warn',
			{
				when: 'never',
				children: {
					when: 'always',
				},
			},
		],

		// Allow React syntax for specific file extensions
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.js', '.jsx', '.tsx'],
			},
		],

		// Tabs for indentation
		'react/jsx-indent': ['warn', 'tab'],
		'react/jsx-indent-props': ['warn', 'tab'],

		// Do not allow duplicate props (ignoring case)
		'react/jsx-no-duplicate-props': [
			'warn',
			{
				ignoreCase: false,
			},
		],

		// Allow multiple expressions on one line
		'react/jsx-one-expression-per-line': 'off',

		// Allow props spreading
		'react/jsx-props-no-spreading': 'off',
	},
}
