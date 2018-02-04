export const roomHeader = () => ({
    textAlign: 'center',
    borderBottom: '2px solid white',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5rem',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 10,
    backgroundColor: 'black',

    '& .subtitle': {
        textTransform: 'uppercase',
        fontSize: '0.5rem',
        letterSpacing: '0.25em',
        display: 'block',
    },

    '& .title': {
        display: 'block',
        margin: '0.25em 0 0.3em',
        lineHeight: 1,
        fontSize: '1.2rem',
    }
})
