module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                normal: 'var(--color-normal)',
                'normal-inverse': 'var(--color-normal-inverse)',
                'normal-soft': 'var(--color-normal-soft)',
                'bg-normal': 'var(--color-bg-normal)',
                'bg-normal-soft': 'var(--color-bg-normal-soft)'
            }
        },
        screens: {
            moblie: '400px',
            tablet: '640px',
            laptop: '1024px',
            desktop: '1280px',
            desktopLg: '1536px'
        }
    },

    variants: {
        extend: {}
    },
    plugins: []
}
