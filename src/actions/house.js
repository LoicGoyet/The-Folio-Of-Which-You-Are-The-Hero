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

export const HOUSE_ROOM_MARK_VISITED = 'HOUSE_ROOM_MARK_VISITED'
export const houseRoomMarkVisited = room => {
  return {
    type: HOUSE_ROOM_MARK_VISITED,
    room: room,
  }
}

export const markRoomAsVisited = store => next => action => {
  if (action.type === HOUSE_ROOM_SWITCH) {
    const { currentRoom } = store.getState().house
    store.dispatch(houseRoomMarkVisited(currentRoom))
  }

  let result = next(action)
  return result
}