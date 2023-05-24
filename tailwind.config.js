/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				identity: {
					primary: '#DC0A2D',
				},
				type: {
					bug: 'A7B723',
					dark: '#75574C',
					dragon: '#7037FF',
					electric: '#F9CF30',
					fairy: '#E69EAC',
					fighting: '#C12239',
					fire: '#F57D31',
					flying: '#A891EC',
					ghost: '#30559B',
					normal: '#AAA67F',
					grass: '#74CB48',
					ground: '#DEC16B',
					ice: '#9AD6DF',
					poison: '#A43E9E',
					psychic: '#FB5584',
					rock: '#B69E31',
					steel: '#B7B9D0',
					water: '#6493EB',
				},
				grayscale: {
					dark: '#212121',
					medium: '#666666',
					light: '#E0E0E0',
					background: '#EFEFEF',
					white: '#FFFFFF',
				},
			},
			fontSize: {
				'header-headline': ['24px', '32px'],
				'header-subtitle-3': ['10px', '16px'],
				'header-subtitle-1': ['14px', '16px'],
				'header-subtitle-2': ['12px', '16px'],
				'body-1': ['14px', '16px'],
				'body-2': ['12px', '16px'],
				'body-3': ['10px', '16px'],
			},
			boxShadow: {
				'drop-2-dp': '0px 1px 3px 1px rgba(0, 0, 0, 0.2)',
				'drop-6-dp': '0px 3px 12px 3px rgba(0, 0, 0, 0.2)',
				'inner-2-dp': 'inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25)',
			},
		},
	},
	plugins: [],
}
