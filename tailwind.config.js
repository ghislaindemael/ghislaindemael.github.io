/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./**/*.{html,js}",
        "!./node_modules/**/*"
    ],
    theme: {
        extend: {
            screens: {
                'xs': '420px',
            }
        },
    },
    plugins: [],
};

