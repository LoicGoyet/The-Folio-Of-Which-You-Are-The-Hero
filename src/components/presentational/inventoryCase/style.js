export const inventory = ({unfolded = false}) => ({
    border: '2px solid',
    borderRight: 0,
    display: 'flex',
    position: 'fixed',
    backgroundColor: 'black',
    color: 'white',
    right: '-160px',
    width: '202px',
    alignItems: 'center',
    top: '1rem',
    transition: 'right 300ms ease-in-out',
    zIndex: 1000,
    animation: unfolded ? '0.7s steps(5, start)' : 'initial',
    animationName: unfolded ? { 'to': { right: 0 }, } : 'initial',
    animationFillMode: unfolded ? 'forwards' : 'initial',
})

export const inventoryToggle = () => ({
    height: '40px',
    width: '40px',
    flexShrink: 0,
    backgroundColor: 'black',
    color: 'white',
    border: 0,
    cursor: 'pointer',
    borderRadius: 0,

    ':hover':  {
        backgroundColor: 'white',
        color: 'black',
    },

    ':focus': {
        boxShadow: '0 0 0 2px violet',
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
