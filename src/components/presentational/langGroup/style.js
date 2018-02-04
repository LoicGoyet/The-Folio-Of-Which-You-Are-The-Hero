export const langGroup = () => ({
  display: 'inline-flex',
  border: '1px solid',
})

export const langGroupBtn = ({ active = false }) => ({
    width: '40px',
    height: '40px',
    border: active ? '1px solid black' : 0,
    backgroundColor: active ? 'white' : 'black',
    color: active ? 'black' : 'white',

    ':focus': {
      outline: 0,
    },
})
