import React from 'react'
import icon from './icon'
import { createComponent, createComponentWithProxy } from 'react-fela'
import { inventory, inventoryToggle, inventoryNoItems } from './style';

const Inventory = createComponent(inventory)
const InventoryToggle = createComponentWithProxy(inventoryToggle, 'button')
const InventoryNoItems = createComponent(inventoryNoItems)

export default ({ children, toggleFold, inventory }) => (
    <Inventory unfolded={!inventory.folded}>
        <InventoryToggle onClick={e => toggleFold()}>
            {icon}
        </InventoryToggle>

        {/* if no children passed display message */}
        {!children && <InventoryNoItems>no items</InventoryNoItems>}

        {/* display the children */}
        {children}
    </Inventory>
)
