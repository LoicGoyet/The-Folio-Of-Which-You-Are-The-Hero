import constants from '../../../style/constants'

const { colorAbstracts } = constants

export const langGroup = () => ({
  display: 'inline-flex',
  border: '1px solid',
})

export const langGroupBtn = ({ active = false }) => {
    const size = '40px'

    const rules = {
        width: size,
        height: size,
        border: 0,
        backgroundColor: colorAbstracts.background,
        color: colorAbstracts.defaultText,

        ':focus': {
          outline: 0,
        },
    }

    const activeRules = {
        border: `1px solid ${colorAbstracts.background}`,
        backgroundColor: colorAbstracts.defaultText,
        color: colorAbstracts.background,
    }

    return {
        ...rules,
        ...(active ? activeRules : {}),
    }
}
