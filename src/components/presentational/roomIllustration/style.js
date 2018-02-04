export const roomIllustration = () => ({
    position: 'relative',
    margin: '1rem 0',

    ':before': {
        display: 'block',
        content: '""',
        width: '100%',
        paddingTop: '56.25%',
    },

    '& img': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }
})
