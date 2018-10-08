import { assocPath } from 'ramda';

export const ADD_MESSAGE = 'logo-folio/messages/ADD_MESSAGE';
export const SET_MESSAGE_AS_READ = 'logo-folio/messages/SET_MESSAGE_AS_READ';

export const defaultState = {
  byId: {},
  allIds: [],
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const id = state.allIds.length;
      const { content } = action;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            id,
            content,
            read: false,
            createdAt: Date.now(),
          },
        },
        allIds: [...state.allIds, id],
      };
    }

    case SET_MESSAGE_AS_READ: {
      return assocPath(['byId', action.id, 'read'], true, state);
    }

    default: {
      return state;
    }
  }
};

export const addMessage = content => ({
  type: ADD_MESSAGE,
  content,
});

export const setMessageAsRead = id => ({
  type: SET_MESSAGE_AS_READ,
  id,
});
