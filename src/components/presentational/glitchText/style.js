import constants from '../../../style/constants'

const { colors, colorAbstracts } = constants

const glitchAnim = {
    '0%':           { clip: 'rect(1px, 9999px, 2px, 0)' },
    '4.16666667%':  { clip: 'rect(7px, 9999px, 54px, 0)' },
    '8.33333333%':  { clip: 'rect(85px, 9999px, 7px, 0)' },
    '12.5%':        { clip: 'rect(148px, 9999px, 41px, 0)' },
    '16.66666667%': { clip: 'rect(29px, 9999px, 83px, 0)' },
    '20.83333333%': { clip: 'rect(91px, 9999px, 34px, 0)' },
    '25%':          { clip: 'rect(138px, 9999px, 93px, 0)' },
    '29.16666667%': { clip: 'rect(31px, 9999px, 61px, 0)' },
    '33.33333333%': { clip: 'rect(128px, 9999px, 2px, 0)' },
    '37.5%':        { clip: 'rect(67px, 9999px, 51px, 0)' },
    '41.66666667%': { clip: 'rect(31px, 9999px, 49px, 0)' },
    '45.83333333%': { clip: 'rect(99px, 9999px, 5px, 0)' },
    '50%':          { clip: 'rect(62px, 9999px, 44px, 0)' },
    '54.16666667%': { clip: 'rect(143px, 9999px, 74px, 0)' },
    '58.33333333%': { clip: 'rect(111px, 9999px, 4px, 0)' },
    '62.5%':        { clip: 'rect(80px, 9999px, 38px, 0)' },
    '66.66666667%': { clip: 'rect(141px, 9999px, 123px, 0)' },
    '70.83333333%': { clip: 'rect(143px, 9999px, 118px, 0)' },
    '75%':          { clip: 'rect(146px, 9999px, 49px, 0)' },
    '79.16666667%': { clip: 'rect(111px, 9999px, 66px, 0)' },
    '83.33333333%': { clip: 'rect(69px, 9999px, 20px, 0)' },
    '87.5%':        { clip: 'rect(4px, 9999px, 103px, 0)' },
    '91.66666667%': { clip: 'rect(62px, 9999px, 82px, 0)' },
    '95.83333333%': { clip: 'rect(18px, 9999px, 60px, 0)' },
    '100%':         { clip: 'rect(56px, 9999px, 144px, 0)' },
}

const glitchAnim2 = {
    '6.66666667%':  { clip: 'rect(31px, 9999px, 18px, 0)' },
    '10%':          { clip: 'rect(59px, 9999px, 60px, 0)' },
    '13.33333333%': { clip: 'rect(29px, 9999px, 61px, 0)' },
    '16.66666667%': { clip: 'rect(98px, 9999px, 63px, 0)' },
    '20%':          { clip: 'rect(73px, 9999px, 146px, 0)' },
    '23.33333333%': { clip: 'rect(136px, 9999px, 4px, 0)' },
    '26.66666667%': { clip: 'rect(118px, 9999px, 50px, 0)' },
    '30%':          { clip: 'rect(92px, 9999px, 144px, 0)' },
    '33.33333333%': { clip: 'rect(136px, 9999px, 125px, 0)' },
    '36.66666667%': { clip: 'rect(94px, 9999px, 77px, 0)' },
    '40%':          { clip: 'rect(132px, 9999px, 2px, 0)' },
    '43.33333333%': { clip: 'rect(14px, 9999px, 87px, 0)' },
    '46.66666667%': { clip: 'rect(15px, 9999px, 18px, 0)' },
    '50%':          { clip: 'rect(5px, 9999px, 37px, 0)' },
    '53.33333333%': { clip: 'rect(68px, 9999px, 89px, 0)' },
    '56.66666667%': { clip: 'rect(112px, 9999px, 18px, 0)' },
    '60%':          { clip: 'rect(113px, 9999px, 79px, 0)' },
    '63.33333333%': { clip: 'rect(110px, 9999px, 102px, 0)' },
    '66.66666667%': { clip: 'rect(1px, 9999px, 119px, 0)' },
    '70%':          { clip: 'rect(52px, 9999px, 83px, 0)' },
    '73.33333333%': { clip: 'rect(112px, 9999px, 99px, 0)' },
    '76.66666667%': { clip: 'rect(58px, 9999px, 21px, 0)' },
    '80%':          { clip: 'rect(77px, 9999px, 32px, 0)' },
    '83.33333333%': { clip: 'rect(67px, 9999px, 18px, 0)' },
    '86.66666667%': { clip: 'rect(48px, 9999px, 82px, 0)' },
    '90%':          { clip: 'rect(17px, 9999px, 28px, 0)' },
    '93.33333333%': { clip: 'rect(18px, 9999px, 25px, 0)' },
    '96.66666667%': { clip: 'rect(142px, 9999px, 66px, 0)' },
    '100%':         { clip: 'rect(44px, 9999px, 104px, 0)' },
}


export const glitchText = ({text, block = false}) => ({
    position: 'relative',
    display: block ? 'block' : 'inline-block',

    ':before': {
        content: `"${text}"`,
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: colorAbstracts.background,
        left: '2px',
        textShadow: `-2px 0 ${colors.green}`,
        clip: 'rect(24px, 550px, 90px, 0)',
        animation: `2.5s infinite linear alternate-reverse`,
        animationName: glitchAnim2,
    },

    ':after': {
        content: `"${text}"`,
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: colorAbstracts.background,
        left: '-2px',
        textShadow: `-2px 0 ${colors.violet}`,
        clip: 'rect(85px, 550px, 140px, 0)',
        animation: `3s infinite linear alternate-reverse`,
        animationName: glitchAnim,
    },
})
