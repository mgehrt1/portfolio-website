/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background': '#172133',
				'white': '#E0E7FF',
				'red': '#FF4588',
				'blue': '#48A7FF',
				'green': '#42F578',
				'yellow': '#E8DD7E',
				'teal': '#52B5B5',
				'light-blue': '#212C3F',
				'techElement': 'rgba(43, 72, 82, 0.5)',
			}
		},
	},
	plugins: [],
}
