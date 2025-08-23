// tailwind.config.js (Add this to your config for xs breakpoint)
/** @type {import('tailwindcss').Config} */
export const content = [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
    extend: {
        screens: {
            'xs': '480px',
        },
    },
};
export const plugins = [];