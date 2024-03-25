/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#ffffff',
					100: '#ffdfe9',
					200: '#ffbed4',
					300: '#ff9cbf',
					400: '#ff77aa',
					500: '#b9597c',
					600: '#633c48',
					700: '#783d52',
					800: '#3c222b',
					900: '#1f1f1f' // 1F1F1F
				}
			}
		}
	}
};

module.exports = config;

/*
  --color-primary-a0: #ffffff;
  --color-primary-a10: #ffdfe9;
  --color-primary-a20: #ffbed4;
  --color-primary-a30: #ff9cbf;
  --color-primary-a50: #ff77aa;
  --color-primary-a60: #b9597c;
  --color-primary-a70: #783d52;
  --color-primary-a80: #3c222b;
  --color-primary-a90: #000000;
  */
