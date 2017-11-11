import React from 'react'
import icon from './icon'
import './style.css';

const InventoryCase = ({ children, toggleFold, inventory }) => (
  <div className={`inventory ${inventory.folded ? 'inventory--folded' : 'inventory--unfolded' }`}>
    <button className="inventory__toggle" onClick={e => toggleFold()}>
      {icon}
    </button>

    {/* if no children passed display message */}
    {!children && <div className="inventory__no-items">no items</div>}

    {/* display the children */}
    {children}
  </div>
)

export default InventoryCase