import { assocPath } from 'ramda';

export const ADD_IN_INVENTORY = 'logo-folio/items/ADD_IN_INVENTORY';

export const defaultState = {
  byId: {
    0: {
      id: 0,
      title: 'Clé',
      inInventory: false,
      messages: ['This keys looks very old !', 'This key might be usefull for the kitchen'],
    },
    1: {
      id: 1,
      title: 'Trowel',
      inInventory: false,
      messages: ['Seems pretty useless...'],
    },
  },
  allIds: [0],
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_IN_INVENTORY: {
      return assocPath(['byId', action.itemId, 'inInventory'], true, state);
    }

    default: {
      return state;
    }
  }
};

export const addInInventory = itemId => ({
  type: ADD_IN_INVENTORY,
  itemId,
});
