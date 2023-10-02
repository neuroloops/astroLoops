/** @type {import("prettier").Config} */
module.exports = {
	"useTabs": true,
	"singleQuote": true,
	"trailingComma": "none",
	"semi": false,
	"printWidth": 100,
	plugins: [
		"prettier-plugin-astro",
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	],

}


