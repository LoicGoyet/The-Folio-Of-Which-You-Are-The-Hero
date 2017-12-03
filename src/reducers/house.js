import {
  HOUSE_ROOM_SWITCH,
  HOUSE_ROOM_UNLOCK,
} from '../actions/house'

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
    case HOUSE_ROOM_SWITCH:
      const leavingRoom = state.currentRoom

      return {
        ...state,
        "currentRoom": action.room,

        // The room left by the user is mark as visited
        [leavingRoom]: {
          ...state[leavingRoom],
          "visited": true,
        }
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
