import { assocPath } from 'ramda';

export const ADD_MESSAGE = 'logo-folio/messages/ADD_MESSAGE';
export const SET_MESSAGE_AS_READ = 'logo-folio/messages/SET_MESSAGE_AS_READ';
export const SET_MESSAGE_AS_READ_LAST_MESSAGE = 'logo-folio/messages/SET_MESSAGE_AS_READ_LAST_MESSAGE';

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

    case SET_MESSAGE_AS_READ_LAST_MESSAGE: {
      const lastMessageId = state.allIds[state.allIds.length - 1];
      return assocPath(['byId', lastMessageId, 'read'], true, state);
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

export const setMessageAsReadLastMessage = () => ({
  type: SET_MESSAGE_AS_READ_LAST_MESSAGE,
});
