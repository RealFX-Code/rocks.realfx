/** @type {import('tailwindcss').Config}*/

const primary = {
    50: '#ffffff',
    100: '#ffdfe9',
    200: '#ffbed4',
    300: '#ff9cbf',
    400: '#ff77aa',
    500: '#b9597c',
    600: '#633c48',
    700: '#783d52',
    800: '#3c222b',
    900: '#1f1f1f'
};

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
                primary: primary,
                gray: primary
            }
        }
    }
};

module.exports = config;
