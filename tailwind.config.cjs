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
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'50%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				slideInRight: {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'50%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				slideInBottom: {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'50%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				hoverScale: {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.05)' },
				},
				fadeIn: {
					'0%': { opacity: 0 },
					'40%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				slideNav: {
					'0%': { transform: 'translateX(-500%)' },
					'60%': { transform: 'translateX(-500%)' },
					'100%': { transform: 'translateX(0)' },
				},
			},
			animation: {
				'slide-in-left': 'slideInLeft 2s ease-out',
				'slide-in-right': 'slideInRight 2s ease-out',
				'slide-in-bottom': 'slideInBottom 4s ease-in-out',
				'scale': 'hoverScale 0.1s ease-in-out forwards',
				'fade-in': 'fadeIn 4s ease-in-out',
				'about-nav': 'slideNav 2.8s ease-out',
				'experience-nav': 'slideNav 3s ease-out',
				'projects-nav': 'slideNav 3.2s ease-out',
				'contact-nav': 'slideNav 3.4s ease-out',
			}
		},
	},
	variants: {
		extend: {
		  	animation: ['hover', 'focus'],
		},
	},
	plugins: [],
	safelist: [
		{ pattern: /text-(green|yellow)/ },
		'lg:animate-about-nav',
		'lg:animate-experience-nav',
		'lg:animate-projects-nav',
		'lg:animate-contact-nav',
	]
}
