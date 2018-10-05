export const MOVE = 'logo-folio/rooms/MOVE';
export const UNLOCK = 'logo-folio/rooms/UNLOCK';

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
      const { id } = action;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
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

export const move = id => ({
  type: MOVE,
  id,
});

export const unlock = id => ({
  type: UNLOCK,
  id,
});
