import constants from '../../../style/constants'

const { colorAbstracts } = constants

export const button = ({framed, size, ...props}) => {
    const rules = {
        background: 0,
        border: 0,
        color: 'inherit',
        cursor: 'pointer',
        padding: '1em',
        textDecoration: 'underline',
        fontFamily: 'inherit',
        borderRadius: 0,
        fontSize: '1em',

        ':hover': {
            backgroundColor: colorAbstracts.defaultText,
            color: colorAbstracts.background,
            borderColor: 'inherit',
        },

        ':active': {
            backgroundColor: colorAbstracts.defaultText,
            color: colorAbstracts.background,
        },

        ':focus': {
            backgroundColor: colorAbstracts.defaultText,
            color: colorAbstracts.background,
        },

        '[disabled]': {
            cursor: 'not-allowed',
            textDecoration: 'none',
            color: 'grey',
            pointerEvents: 'none',
        }
    }

    const sizeRules = {
        'sm': {
            fontSize: '0.75em',
        },
    }

    const framedRules = {
        border: '0.125em solid currentColor',
        textDecoration: 'none',

        ':hover': {
            borderColor: colorAbstracts.defaultText,
            backgroundColor: colorAbstracts.defaultText,
            color: colorAbstracts.background,
        },
    }

    return {
        ...rules,
        ...(size ? sizeRules[size]: {}),
        ...(framed ? framedRules : {}),
    }
}
