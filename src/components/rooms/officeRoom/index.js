import React from 'react'
import Room from '../../presentational/room'
import Button from '../../presentational/button'
import ButtonGroup from '../../presentational/buttonGroup'


const OfficeRoom = props => (
  <Room
    {...props}
    title="Office"
  >
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eum hic reiciendis quaerat sint perferendis impedit asperiores at adipisci, commodi aspernatur cum culpa obcaecati iure totam possimus illum sapiente harum!</p>

    <ButtonGroup>
      <Button onClick={e => props.switchRoom('leftCorridor')}>Go to corridor left</Button>
    </ButtonGroup>
  </Room>
)

export default OfficeRoom