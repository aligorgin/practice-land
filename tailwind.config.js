module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'openSans': ['Open Sans', 'sans-serif']
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'orange': '#e67e22',
            'Dorange': '#cf6d17',
            'wickyWhite':'#f4f4f4'
        }),
        borderColor: theme => ({
            ...theme('colors'),
            DEFAULT: theme('colors.gray.300', 'currentColor'),
            'orange': '#e67e22',
            'Dorange': '#cf6d17'
        }),
        textColor: theme => ({
            ...theme('colors'),
            'orange': '#e67e22',
            'Dorange': '#cf6d17'
        }),
        extend: {
            backgroundImage: theme => ({
                'hero': "url('/src/assets/img/omnifood/hero.jpg')",
                'backCustomer':"url('/src/assets/img/omnifood/back-customers.jpg')"
            }),
            padding: {
                '13': '3.25rem',
            },
            maxWidth: {
                '1140': '1140px',
            },
            width: {
                '1140': '1140px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
