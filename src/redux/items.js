export const ADD_IN_INVENTORY = 'logo-folio/items/ADD_IN_INVENTORY';

export const defaultState = {
  byId: {
    0: {
      id: 0,
      title: 'Clé',
      inInventory: false,
      message: 'lorem ipsum',
    },
  },
  allIds: [0],
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_IN_INVENTORY: {
      const { id } = action;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            inInventory: true,
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};

export const addInInventory = id => ({
  type: ADD_IN_INVENTORY,
  id,
});
