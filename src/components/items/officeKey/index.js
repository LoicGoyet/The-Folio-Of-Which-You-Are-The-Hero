import React from 'react'
import InventoryItem from '../../containers/inventoryItem'

const OfficeKeyItemModal = props => {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint praesentium ullam aspernatur voluptatum quasi ea deserunt incidunt est ratione voluptatibus ut consequatur enim debitis necessitatibus laudantium quidem eaque asperiores, ipsum?
    </p>
  )
}


const OfficeKeyItem = props => {
  return (
    <InventoryItem {...props} modal={OfficeKeyItemModal}>
      office key
    </InventoryItem>
  )
}

export default OfficeKeyItem