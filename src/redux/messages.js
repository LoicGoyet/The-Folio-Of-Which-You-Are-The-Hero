import { assocPath } from 'ramda';

export const ADD = 'logo-folio/messages/ADD';
export const SET_AS_READ = 'logo-folio/messages/SET_AS_READ';

export const defaultState = {
  byId: {},
  allIds: [],
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD: {
      const id = state.allIds.length;
      const { message } = action;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            id,
            message,
            read: false,
            createdAt: Date.now(),
          },
        },
        allIds: [...state.allIds, id],
      };
    }

    case SET_AS_READ: {
      return assocPath(['byId', action.id, 'read'], true, state);
    }

    default: {
      return state;
    }
  }
};

export const add = message => ({
  type: ADD,
  message,
});

export const setAsRead = id => ({
  type: SET_AS_READ,
  id,
});
