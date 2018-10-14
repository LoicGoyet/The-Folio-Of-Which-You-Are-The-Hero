import React from 'react';
import { assocPath } from 'ramda';

import GlitchText from '../components/GlitchText';
import parvisIllustration from '../rooms/Parvis/illustration.gif';
import kitchenIllustration from '../rooms/Kitchen/illustration.jpg';

export const MOVE_TO_ROOM = 'logo-folio/rooms/MOVE_TO_ROOM';
export const UNLOCK = 'logo-folio/rooms/UNLOCK';
export const REMOVE_ITEM = 'logo-folio/rooms/REMOVE_ITEM';
export const SET_ROOM_AS_VISITED = 'logo-folio/rooms/SET_ROOM_AS_VISITED';

export const defaultState = {
  active: 0,
  byId: {
    0: {
      id: 0,
      title: 'Parvis',
      component: 'Parvis',
      locked: false,
      visited: false,
      illustration: parvisIllustration,
      firstEntryMessages: [
        <p>
          Welcome my <GlitchText>friend</GlitchText> !
        </p>,
        <p>
          This mansion may looks scary. But you will see, there is no <GlitchText>danger</GlitchText> in it.
        </p>,
      ],
      exits: {
        byId: {
          0: {
            id: 0,
            room: 1,
            path:
              'M480,588v-76c0,0-7-8-4.25-13l18.25-1c0,0,6-36,36-36s40.75,31,40.75,33c0,1,19.25,0,19.25,0s-0.75,14.25-9,14.25L580.5,588H480z',
          },
        },
        allIds: [0],
      },
    },
    1: {
      id: 1,
      title: 'Kitchen',
      component: 'Kitchen',
      locked: false,
      visited: false,
      illustration: kitchenIllustration,
      firstEntryMessages: [
        <p>
          You enter into the <GlitchText>Kitchen</GlitchText> !
        </p>,
      ],
      interactives: {
        byId: {
          0: {
            id: 0,
            title: 'Mail box',
            item: 1,
            message: 'Close to the entry door, a mailbox is open. Some items are still in it',
            path: 'M424,412.75l108.625-10.5l-0.438,143.5L429.219,574.5l-1.359-39c0,0-0.859-2.75-3.859-2.5V412.75z',
          },
        },
        allIds: [0],
      },
      exits: {
        byId: {
          0: {
            id: 0,
            room: 0,
            path: 'M491.25,336.75L490.5,190l-81.5,4.5c0,0-0.375,1.125,0,3.875l2,136.375L491.25,336.75z',
          },
        },
        allIds: [0],
      },
    },
    2: {
      id: 2,
      title: 'Library',
      component: 'Library',
      locked: true,
      visited: false,
      interactives: {
        byId: {
          0: {
            id: 0,
            title: 'tiroir',
            item: 0,
            message: 'ha ha ha',
          },
          1: {
            id: 1,
            title: 'placard',
            message: 'there is nothing in it',
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
    case MOVE_TO_ROOM: {
      if (state.byId[action.id].locked) return { ...state };

      return {
        ...state,
        active: action.id,
      };
    }

    case UNLOCK: {
      return assocPath(['byId', action.id, 'locked'], false, state);
    }

    case SET_ROOM_AS_VISITED: {
      return assocPath(['byId', action.id, 'visited'], true, state);
    }

    case REMOVE_ITEM: {
      const { roomId, interactiveId } = action;
      const itemPath = ['byId', roomId, 'interactives', 'byId', interactiveId, 'item'];
      return assocPath(itemPath, null, state);
    }

    default: {
      return state;
    }
  }
};

export const moveToRoom = id => ({
  type: MOVE_TO_ROOM,
  id,
});

export const unlock = id => ({
  type: UNLOCK,
  id,
});

export const setRoomAsVisited = id => ({
  type: SET_ROOM_AS_VISITED,
  id,
});

export const removeItem = (roomId, interactiveId) => ({
  type: REMOVE_ITEM,
  roomId,
  interactiveId,
});
