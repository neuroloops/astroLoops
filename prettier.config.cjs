/** @type {import("prettier").Config} */
module.exports = {
	semi: false,
	"useTabs": true,
	"singleQuote": true,
	"trailingComma": "none",
	"semi": false,
	"printWidth": 100,
	plugins: [
		"prettier-plugin-astro",
		"prettier-plugin-tailwindcss",
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


