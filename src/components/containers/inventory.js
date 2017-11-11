import React from 'react'

import { connect } from 'react-redux'
import * as inventoryAction from '../../actions/inventory'

import InventoryCase from '../presentational/inventoryCase'
import OfficeKeyItem from '../items/officeKey'


const mapStateToProps = (state, ownProps) => {
  return {
    inventory: state.inventory,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleFold: () => dispatch(inventoryAction.inventoryFoldToggle()),
})

const items = {
  'officeKey': OfficeKeyItem
}

const Inventory = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const activeItems = props.inventory.items

  return (
    <div>
      <InventoryCase {...props}>
        {activeItems.length > 0 && (
          <div>
            {activeItems.map(item => {
              const ItemComponent = items[item]
              return (<ItemComponent key={`item-${item}`} {...props} item={item} emphasis={props.inventory.emphasis === item} />)
            })}
          </div>
        )}
      </InventoryCase>
    </div>
  );
})


export default Inventory