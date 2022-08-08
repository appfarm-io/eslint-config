module.exports = {
	parserOptions: {
		ecmaVersion: 2020,
	},
	extends: [
		'airbnb/base',
		'airbnb-typescript/base',
		'plugin:jest/recommended',
		'./rules/base.js',
		'./rules/typescript.js',
	],
}
