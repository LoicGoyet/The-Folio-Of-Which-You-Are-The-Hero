import constants from '../../../style/constants'
import { opacify } from '../../../style/functions'

const { colors } = constants

export const modal = () => ({
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: opacify(colors.black, 0.75),
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
})

export const modalDialog = () => ({
    width: '100%',
    maxWidth: '27rem',
    margin: '1rem auto',
    animation: `0.4s steps(5, start)`,
    animationName: {
        'from': { transform: 'translateY(-100%)' },
        'to': { transform: 'translateY(0)' },
    },
    animationFillMode: 'forwards',
    transform: 'translateY(0)',
})

export const modalInner = () => ({
    backgroundColor: colors.white,
    color: colors.black,
    padding: '1rem',
})
