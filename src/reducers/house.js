import {
  HOUSE_ROOM_UNLOCK,
} from '../actions/house'

import {
  HOUSE_ROOM_SET_AS_VISITED,
  HOUSE_ROOM_UPDATE_CURRENTROOM,
} from '../sagas/house'

const defaultState = {
  "currentRoom": "entrance",
  "entrance": {
    "visited": false,
  },
  "leftCorridor": {
    "visited": false,
  },
  "library": {
    "visited": false,
  },
  "office": {
    "visited": false,
    "locked": true,
  },
}

const house = (state = defaultState, action) => {
  switch (action.type) {
    case HOUSE_ROOM_SET_AS_VISITED:
      const leavingRoom = state.currentRoom

      return {
        ...state,
        [leavingRoom]: {
          ...state[leavingRoom],
          "visited": true,
        }
      }
    
    case HOUSE_ROOM_UPDATE_CURRENTROOM:
      return {
        ...state,
        "currentRoom": action.room,
      }

    case HOUSE_ROOM_UNLOCK:
      return {
        ...state,
        [action.room]: {
          ...state[action.room],
          "locked": false,
        }
      }

    default:
      return state
  }
}

export default house
