import React from 'react'
import Room from '../../presentational/room'
import Button from '../../presentational/button'
import ButtonGroup from '../../presentational/buttonGroup'

const LeftCorridorRoom = ({house, inventory, switchRoom, unlockRoom, ...props}) => {
  const gotOfficeKey = inventory.items.indexOf('officeKey') >= 0

  return (
    <Room
      {...props}
      title="Left Corridor"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nemo ipsa sequi saepe iusto nesciunt, eius labore explicabo quas, adipisci dolorem dolor molestiae sed earum sint ea voluptatum quisquam atque.</p>

      <ButtonGroup>
        <Button onClick={e => switchRoom('library')}>Go to the library</Button>

        { house.office.locked && gotOfficeKey && (
          <Button onClick={e => unlockRoom('office')}>Unlock the office</Button>
        )}

        <Button onClick={e => switchRoom('office')} disabled={house.office.locked}>Go to the office</Button>
        <Button onClick={e => switchRoom('entrance')}>Go the entrance</Button>
      </ButtonGroup>
    </Room>
  )
}

export default LeftCorridorRoom