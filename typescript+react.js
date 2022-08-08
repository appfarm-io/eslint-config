module.exports = {
	parserOptions: {
		ecmaVersion: 2020,
	},
	extends: [
		'airbnb',
		'airbnb-typescript',
		'plugin:jest/recommended',
		'./rules/base.js',
		'./rules/react.js',
		'./rules/typescript.js',
		// TODO: Use react-hooks plugin?
	],
}
