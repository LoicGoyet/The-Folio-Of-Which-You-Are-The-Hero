export const blinkContent = () => ({
    animationName: {
        '0%': { opacity: 0 },
        '33%': { opacity: 0 },
        '34%': { opacity: 0.5 },
        '65%': { opacity: 0.5 },
        '66%': { opacity: 1 },
        '100%': { opacity: 1 },
    },
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationDuration: '0.5s',
})
