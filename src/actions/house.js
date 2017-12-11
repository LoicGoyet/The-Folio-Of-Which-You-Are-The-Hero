export const HOUSE_ROOM_SWITCH = 'HOUSE_ROOM_SWITCH'
export const houseRoomSwitch = room => ({
  type: HOUSE_ROOM_SWITCH,
  room,
})

export const HOUSE_ROOM_UNLOCK = 'HOUSE_ROOM_UNLOCK'
export const houseRoomUnlock = room => ({
  type: HOUSE_ROOM_UNLOCK,
  room,
})
