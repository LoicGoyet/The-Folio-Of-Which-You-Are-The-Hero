const emphasisAnimation = () => ({
    'to': { boxShadow: '0 0 0 10px #00ff96' },
})

export const inventoryButton = ({emphasis}) => ({
    height: '40px',
    width: '40px',
    backgroundColor: 'black',
    border: 0,
    color: 'white',
    cursor: 'pointer',
    borderRadius: 0,
    boxShadow: emphasis ? '0 0 0 0 #00ff96' : 'initial',
    animation: emphasis ? '0.6s steps(3, start) infinite' : 'initial',
    animationName: {
        'to': { boxShadow: '0 0 0 10px #00ff96' },
    },

    ':hover': {
        backgroundColor: 'blueviolet',
    },
})
