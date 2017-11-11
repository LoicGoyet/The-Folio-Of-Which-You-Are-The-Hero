export const HOUSE_ROOM_SWITCH = 'HOUSE_ROOM_SWITCH'
export const houseRoomSwitch = room => {
  return {
    type: HOUSE_ROOM_SWITCH,
    room: room,
  }
}

export const HOUSE_ROOM_UNLOCK = 'HOUSE_ROOM_UNLOCK'
export const houseRoomUnlock = room => {
  return {
    type: HOUSE_ROOM_UNLOCK,
    room: room,
  }
}

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