import {
  HOUSE_ROOM_SWITCH,
  HOUSE_ROOM_UNLOCK,
  HOUSE_ROOM_MARK_VISITED,
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
      return {
        ...state,
        "currentRoom": action.room
      }

    case HOUSE_ROOM_UNLOCK:
      return {
        ...state,
        [action.room]: {
          ...state[action.room],
          "locked": false,
        }
      }

    case HOUSE_ROOM_MARK_VISITED:
      return {
        ...state,
        [action.room]: {
          ...state[action.room],
          "visited": true,
        }
      }

    default:
      return state
  }
}

export default house