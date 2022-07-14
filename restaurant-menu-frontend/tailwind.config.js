const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				accent: '#fa6235',
				charcoal: {
					50: '#36454F',
					100: '#495D6A',
					200: '#5B7586',
				},
			},
			textColor: {
				light: {
					primary: 'rgb(255 255 255 / 1)',
					secondary: 'rgb(255 255 255 / .7)',
					disabled: 'rgb(255 255 255 / .5)',
					dividers: 'rgb(255 255 255 / .12)',
				},
				dark: {
					primary: 'rgb(0 0 0 / .87)',
					secondary: 'rgb(0 0 0 / .54)',
					disabled: 'rgb(0 0 0 / .38)',
					dividers: 'rgb(0 0 0 / .12)',
				},
			},
			backgroundColor: {
				light: {
					50: '#ffffff',
					100: '#fafafa',
					200: '#f5f5f5',
				},
				dark: {
					50: '#36454F',
					100: '#495D6A',
					200: '#5B7586',
				},
			},
			fontFamily: {
				primary: ['Eczar', ...defaultTheme.fontFamily.serif],
				secondary: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
