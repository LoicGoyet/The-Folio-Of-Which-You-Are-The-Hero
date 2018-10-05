export const MOVE = 'logo-folio/rooms/MOVE';
export const UNLOCK = 'logo-folio/rooms/UNLOCK';

export const defaultState = {
  active: 'Parvis',
  byTitle: {
    Parvis: {
      locked: false,
    },
    Kitchen: {
      locked: true,
    },
    Library: {
      locked: false,
      interactives: {
        byId: {
          0: {
            title: 'tiroir',
            items: [0, 1],
            message: 'ha ha ha',
            open: false,
          },
          1: {
            title: 'placard',
            items: [2],
            open: false,
          },
        },
        allIds: [0, 1],
      },
    },
  },
  allTitles: ['Parvis', 'Kitchen'],
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case MOVE: {
      return {
        ...state,
        active: action.room,
      };
    }

    case UNLOCK: {
      const { room } = action;

      return {
        ...state,
        byTitle: {
          ...state.byTitle,
          [room]: {
            ...state.byTitle[room],
            locked: false,
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};

export const move = room => ({
  type: MOVE,
  room,
});

export const unlock = room => ({
  type: UNLOCK,
  room,
});
