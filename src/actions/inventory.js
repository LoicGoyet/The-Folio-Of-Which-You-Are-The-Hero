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

export const INVENTORY_ITEM_EMPHASIS_SET = 'INVENTORY_ITEM_EMPHASIS_SET'
export const inventoryItemEmphasisSet = item => {
  return {
    type: INVENTORY_ITEM_EMPHASIS_SET,
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

export const INVENTORY_FOLD_OPEN = 'INVENTORY_FOLD_OPEN'
export const inventoryFoldOpen = _ => {
  return {
    type: INVENTORY_FOLD_OPEN
  }
}

export const highlightCaseWhenAddItem = store => next => action => {
  let result = next(action)

  // When adding a new item to the inventory, we open the inventory case
  // and put some emphasis on the item just added
  if (action.type === INVENTORY_ITEM_ADD) {
    store.dispatch(inventoryFoldOpen())
    store.dispatch(inventoryItemEmphasisSet(action.item))
  }

  const { folded } = store.getState().inventory;

  // When the inventory case in folded after the item emphasis, we remote it
  if (action.type === INVENTORY_FOLD_TOGGLE && folded === true) {
    store.dispatch(inventoryItemEmphasisUnset())
  }

  return result
}
