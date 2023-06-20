/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#191919',
			white: colors.white,
			gray: colors.slate,
			red: colors.red,
			orange: '#FFB724',
			blue: { light: '#4d98ff', DEFAULT: '#006CFF', dark: '#0061e6' },
			ocean: { light: '#4d88b7', DEFAULT: '#005598', dark: '#004d89' },
			cyan: { light: '#5cc9eb', DEFAULT: '#16B2E2', dark: '#14a0cb' },
			teal: '#126979',
			'dark-gray': '#2D424B',
			'yellow-green': '#B7D446',
		},
		extend: {
			fontFamily: {
				sans: ['Manrope', ...defaultTheme.fontFamily.sans],
			},
			borderRadius: {
				'4xl': '1.875rem',
			},
		},
	},
	plugins: [],
};
