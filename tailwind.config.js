module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                'primary': '#03363D',
                'secondary': '#03363d',
                'third': '#17494D',
                'body': '#F8F9F9',
                'subtleGray': '#FAFAFA',
                'hover': '#F3F0EE',
                'link': '#30AABC',
            },
            textColor: {
                'error': '#AF2C2C',
                'primary': '#03363D'
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
