export const INVENTORY_ITEM_ADD = 'INVENTORY_ITEM_ADD'
export const inventoryItemAdd = item => ({
  type: INVENTORY_ITEM_ADD,
  item,
})

export const INVENTORY_ITEM_REMOVE = 'INVENTORY_ITEM_REMOVE'
export const inventoryItemRemove = item => ({
  type: INVENTORY_ITEM_REMOVE,
  item,
})

export const INVENTORY_ITEM_EMPHASIS_UNSET = 'INVENTORY_ITEM_EMPHASIS_UNSET'
export const inventoryItemEmphasisUnset = () => ({
  type: INVENTORY_ITEM_EMPHASIS_UNSET,
})

export const INVENTORY_FOLD_TOGGLE = 'INVENTORY_FOLD_TOGGLE'
export const inventoryFoldToggle = () => ({
  type: INVENTORY_FOLD_TOGGLE
})
