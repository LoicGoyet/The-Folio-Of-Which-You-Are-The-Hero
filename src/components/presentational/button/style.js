export const button = ({framed, size = 'md', ...props}) => ({
    background: 'transparent',
    border: framed ? '0.125em solid currentColor' : 0,
    color: 'inherit',
    cursor: 'pointer',
    padding: '1em',
    textDecoration: framed ? 'none' : 'underline',
    fontSize: (() => {
        if (size === 'sm') return '0.75em'
        return '1em'
    })(),
    fontFamily: 'inherit',
    borderRadius: 0,

    ':hover': {
        backgroundColor: 'white',
        color: 'black',
        borderColor: framed ? 'black' : 'inherit',
    },

    ':active': {
        backgroundColor: 'white',
        color: 'black',
    },

    ':focus': {
        backgroundColor: 'white',
        color: 'black',
    },

    '[disabled]': {
        cursor: 'not-allowed',
        textDecoration: 'none',
        color: 'grey',
        pointerEvents: 'none',
    }
})
