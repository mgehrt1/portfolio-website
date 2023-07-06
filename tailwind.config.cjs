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
				'gold': '#DEB992',
				'teal': '#52B5B5',
				'light-blue': '#212C3F',
				'techElement': 'rgba(43, 72, 82, 0.5)',
			},
			keyframes: {
				slideInLeft: {
					'0%': { transform: 'translateX(-200%)', opacity: '0' },
					'30%': { transform: 'translateX(-200%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				slideInTop: {
					'0%': { transform: 'translateY(-200%)', opacity: '0' },
					'30%': { transform: 'translateY(-200%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				hoverScale: {
					'0%': { transform: 'scale(1)'},
					'100%': { transform: 'scale(1.05)'},
				}
			},
			animation: {
				'slide-in-left': 'slideInLeft 1.5s ease-out',
				'slide-in-top': 'slideInTop 1.5s ease-out',
				'scale': 'hoverScale 0.2s ease-in-out forwards',
			}
		},
	},
	variants: {
		extend: {
		  	animation: ['hover', 'focus'],
		},
	},
	plugins: [],
	safelist: [{
		pattern: /text-(green|yellow)/
	}]
}
