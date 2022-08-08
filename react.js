module.exports = {
	parserOptions: {
		ecmaVersion: 2020,
	},
	extends: [
		'airbnb',
		'plugin:jest/recommended',
		'./rules/base.js',
		'./rules/react.js',
		// TODO: Use react-hooks plugin?
	],
}
