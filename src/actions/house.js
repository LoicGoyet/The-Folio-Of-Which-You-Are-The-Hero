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
