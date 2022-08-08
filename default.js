module.exports = {
	parserOptions: {
		ecmaVersion: 2020,
	},
	extends: [
		'airbnb/base',
		'plugin:jest/recommended',
		'./rules/base.js',
	],
}
