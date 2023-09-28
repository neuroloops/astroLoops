/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				llBlue: {
					400: '#142244',
					500: '#020244',
					600: '#0c162d'
				},
				llTeal: {
					400: "#01FEFC",
					500: '#01fef0',
					600: '#42e8e0',
				},
				llWhite: {
					400: '#fafafa',
					500: '#f4f4f4',
					600: '#e7e7e7'
				},
				llBlack: {
					500: "#0B0B0B"
				},
				txt: {
					dark: '#202020',
				},
				btnTxt: {
					dark: "#01FEFC",
					darkH: "#142244",
					light: "#020244",
					lightH: "#020244"
				},
				btnBg: {
					dark: "#142244",
					darkH: "#01FEDC",
					light: "#01fef0",
					lightH: "white"
				},
			},
			boxShadow: {
				'card': '0px 6px 42px rgba(0, 0, 0, 0.08);',
			},

		}
	},
	plugins: [require("@tailwindcss/typography")],
}
