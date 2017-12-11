export const INVENTORY_ITEM_ADD = 'INVENTORY_ITEM_ADD'
export const inventoryItemAdd = item => {
  return {
    type: INVENTORY_ITEM_ADD,
    item: item
  }
}

export const INVENTORY_ITEM_REMOVE = 'INVENTORY_ITEM_REMOVE'
export const inventoryItemRemove = item => {
  return {
    type: INVENTORY_ITEM_REMOVE,
    item: item
  }
}

export const INVENTORY_ITEM_EMPHASIS_UNSET = 'INVENTORY_ITEM_EMPHASIS_UNSET'
export const inventoryItemEmphasisUnset = _ => {
  return {
    type: INVENTORY_ITEM_EMPHASIS_UNSET,
  }
}

export const INVENTORY_FOLD_TOGGLE = 'INVENTORY_FOLD_TOGGLE'
export const inventoryFoldToggle = _ => {
  return {
    type: INVENTORY_FOLD_TOGGLE
  }
}
