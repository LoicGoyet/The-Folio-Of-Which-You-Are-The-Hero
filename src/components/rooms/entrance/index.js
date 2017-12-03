import React from 'react'
import Room from '../../presentational/room'
import Button from '../../presentational/button'
import ButtonGroup from '../../presentational/buttonGroup'
import illustration from './illustration.gif'

const EntranceRoom = ({switchRoom, trans, ...props}) => (
  <Room
    {...props}
    title={trans["entrance.title"]}
    illustration={{
      src: illustration,
      alt: "hello world !",
    }}
  >
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nemo ipsa sequi saepe iusto nesciunt, eius labore explicabo quas, adipisci dolorem dolor molestiae sed earum sint ea voluptatum quisquam atque.</p>

    <ButtonGroup>
      <Button onClick={e => switchRoom('leftCorridor')}>Go to corridor left</Button>
    </ButtonGroup>
  </Room>
)

export default EntranceRoom
