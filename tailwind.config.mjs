/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                orbitron: "var(--font-orbitron)",
                audiowide: "var(--font-audiowide)",
                pressstart: "var(--font-pressStart2P)",
                vt323: "var(--font-vt323)",
                monoton: "var(--font-monoton)",
            },
        },
    },
    plugins: [],
};

export default config;
