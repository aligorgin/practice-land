module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'openSans': ['Open Sans', 'sans-serif']
        },
        extend: {
            backgroundImage: theme=>( {
                'hero': "url('/src/assets/img/omnifood/hero.jpg')",
            }),
            padding: {
                '13': '3.25rem',
            },
            maxWidth: {
                '1140': '1140px',
            },
            width: {
                '1140': '1140px',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
