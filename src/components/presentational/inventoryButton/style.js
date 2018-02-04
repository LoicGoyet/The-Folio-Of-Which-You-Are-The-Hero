import constants from '../../../style/constants'

const { colors, colorAbstracts } = constants

export const inventoryButton = ({emphasis = false}) => {
    const size = '40px'

    const rules = {
        height: size,
        width: size,
        backgroundColor: colorAbstracts.background,
        border: 0,
        color: colorAbstracts.defaultText,
        cursor: 'pointer',
        borderRadius: 0,

        ':hover': {
            backgroundColor: colors.blueviolet,
        },
    }

    const emphasisRules = {
        boxShadow: `0 0 0 0 ${colors.green}`,
        animation: '0.6s steps(3, start) infinite',
        animationName: {
            'to': { boxShadow: `0 0 0 10px ${colors.green}` },
        },
    }

    return {
        ...rules,
        ...(emphasis ? emphasisRules : {})
    }
}
