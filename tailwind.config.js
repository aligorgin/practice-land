module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '2.5xl':'1.625rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        fontFamily: {
            'openSans': ['Open Sans', 'sans-serif'],
            'lato': ['Lato', 'sans-serif']
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'orange': '#e67e22',
            'Dorange': '#cf6d17',
            'wickyWhite': '#f4f4f4',
            'wickyyWhite': '#fcfcfc',
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
            'Dorange': '#cf6d17',
            'googlePlus': '#db4437',
            'facebook': '#1877f2',
            'twitter': '#1da1f2',
            'instagram': '#c32aa3',
        }),
        extend: {
            backgroundImage: theme => ({
                'hero': "url('/src/assets/img/omnifood/hero.jpg')",
                'backCustomer': "url('/src/assets/img/omnifood/back-customers.jpg')"
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
