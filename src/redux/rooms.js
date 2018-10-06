import { assocPath, path } from 'ramda';

export const MOVE = 'logo-folio/rooms/MOVE';
export const UNLOCK = 'logo-folio/rooms/UNLOCK';
export const REMOVE_ITEM = 'logo-folio/rooms/REMOVE_ITEM';

export const defaultState = {
  active: 0,
  byId: {
    0: {
      id: 0,
      title: 'Parvis',
      component: 'Parvis',
      locked: false,
    },
    1: {
      id: 1,
      title: 'Kitchen',
      component: 'Kitchen',
      locked: true,
    },
    2: {
      id: 2,
      title: 'Library',
      component: 'Library',
      locked: false,
      interactives: {
        byId: {
          0: {
            title: 'tiroir',
            items: [0],
            message: 'ha ha ha',
          },
          1: {
            title: 'placard',
            items: [],
          },
        },
        allIds: [0, 1],
      },
    },
  },
  allIds: [0, 1, 2],
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case MOVE: {
      return {
        ...state,
        active: action.id,
      };
    }

    case UNLOCK: {
      return assocPath(['byId', action.id, 'locked'], false, state);
    }

    case REMOVE_ITEM: {
      const { roomId, interactiveId, itemId } = action;
      const itemsPath = ['byId', roomId, 'interactives', 'byId', interactiveId, 'items'];
      const items = path(itemsPath, state);
      return assocPath(itemsPath, items.filter(item => item !== itemId), state);
    }

    default: {
      return state;
    }
  }
};

export const move = id => ({
  type: MOVE,
  id,
});

export const unlock = id => ({
  type: UNLOCK,
  id,
});

export const removeItem = (roomId, interactiveId, itemId) => ({
  type: REMOVE_ITEM,
  roomId,
  interactiveId,
  itemId,
});
