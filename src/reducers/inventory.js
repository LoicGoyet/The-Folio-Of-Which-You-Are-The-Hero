import {
  INVENTORY_ITEM_ADD,
  INVENTORY_ITEM_REMOVE,
  INVENTORY_FOLD_TOGGLE,
  INVENTORY_FOLD_OPEN,
  INVENTORY_ITEM_EMPHASIS_SET,
  INVENTORY_ITEM_EMPHASIS_UNSET,
} from '../actions/inventory'

const defaultState = {
  'items': [],
  'folded': true,
}

const inventory = (state = defaultState, action) => {
  switch (action.type) {
    case INVENTORY_ITEM_ADD:
      const itemToAddIndex = state.items.indexOf(action.item);
      if (itemToAddIndex >= 0) return state // check if the item is already in inventory

      return {
        ...state,
        'items': [...state.items, action.item],
      }

    case INVENTORY_ITEM_REMOVE:
      return {
        ...state,
        'items': state.items.filter(item => item !== action.item),
      }

    case INVENTORY_FOLD_TOGGLE:
      return {
        ...state,
        'folded': !state.folded
      }

    case INVENTORY_FOLD_OPEN:
      return {
        ...state,
        'folded': false
      }

    case INVENTORY_ITEM_EMPHASIS_SET:
      return {
        ...state,
        'emphasis': action.item,
      }
    case INVENTORY_ITEM_EMPHASIS_UNSET:
      return {
        ...state,
        'emphasis': false,
      }

    default:
      return state
  }
}

export default inventory