const path = require('path')

module.exports = {
	root: true,
	extends: '../../typescript+react.js',
	settings: {
		jest: {
			version: 26,
		},
	},
	parserOptions: {
		project: path.resolve(__dirname, '../../tsconfig.json'),
	},
}
