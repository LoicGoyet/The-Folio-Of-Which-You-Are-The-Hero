import constants from '../../../style/constants'

const { colors, colorAbstracts } = constants

export const inventory = ({unfolded = false}) => {
    const rules = {
        border: '2px solid',
        borderRight: 0,
        display: 'flex',
        position: 'fixed',
        backgroundColor: colorAbstracts.background,
        color: 'white',
        right: '-160px',
        width: '202px',
        alignItems: 'center',
        top: '1rem',
        transition: 'right 300ms ease-in-out',
        zIndex: 1000,
    }

    const unfoldedRules = {
        animation: '0.7s steps(5, start)',
        animationName: {
            'to': { right: 0 },
        },
        animationFillMode: 'forwards',
    }

    return {
        ...rules,
        ...(unfolded ? unfoldedRules : {})
    }
}

export const inventoryToggle = () => ({
    height: '40px',
    width: '40px',
    flexShrink: 0,
    backgroundColor: colorAbstracts.background,
    color: colorAbstracts.defaultText,
    border: 0,
    cursor: 'pointer',
    borderRadius: 0,

    ':hover':  {
        backgroundColor: colorAbstracts.defaultText,
        color: colorAbstracts.background,
    },

    ':focus': {
        boxShadow: `0 0 0 2px ${colors.violet}`,
        outline: 'none',
    },
})

export const inventoryNoItems = () => ({
    flexShrink: 0,
    height: '40px',
    lineHeight: '40px',
    flexGrow: 1,
    padding: '0 0.5em',
})
