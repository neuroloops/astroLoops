/** @type {import("prettier").Config} */
const config = {
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
	"pluginSearchDirs": false

}

module.exports = config

