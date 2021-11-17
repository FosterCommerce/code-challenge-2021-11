module.exports = {
    mode: 'jit',
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {

        /* Centers containers by default. Saves us from writing a bunch of mx-auto everywhere. */
        container: {
            center: true,
        },
        /* NOTE: Values at the "Theme" level override the Tailwind default config completely, so use sparingly.  */
        screens: {
            sm: '540px',
            md: '720px',
            lg: '960px',
            xl: '1140px',
            '2xl': '1240px',
            '3xl': '1680px',
        },

        extend: {
            /* NOTE: "Extend" the config here, rather than overriding it completely at the "Theme" level.
        Also, note that with JIT (Just In Time) mode set in Tailwind, there shouldn't be any real need
        to create one-off font sizes or spacing values as JIT mode allows for arbitrary styles using
        bracket syntax (ex: text-[1.875rem]). See the docs at: https://tailwindcss.com/docs/just-in-time-mode.
        So extending here, should only be done to include specific design tokens such as fonts and colors.
      * */
            zIndex: {
                '-2': '-2',
            },
            fontFamily: {
                display: ['Miracle', 'Georgia', 'serif'],
                body: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
            },
            colors: {
                body: '#F8F2EA',
                'highlight-body': '#FCFAF7',
                primary: '#332a1d',
                'highlight-primary': '#DE6F47',
                secondary: '#9D7849',
                'highlight-secondary': '#b75633',
                tertiery: '#69645C',
                'highlight-tertiery': '#F8EAE4',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
