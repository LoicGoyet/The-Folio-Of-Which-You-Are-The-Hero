import React from 'react';
import { assocPath } from 'ramda';

import GlitchText from '../components/GlitchText';

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
      illustration:
        'https://raw.githubusercontent.com/LoicGoyet/The-Folio-Of-Which-You-Are-The-Hero/master/src/components/rooms/entrance/illustration.gif',
      firstEntryMessages: [
        <p>
          Welcome my <GlitchText>friend</GlitchText> !
        </p>,
        <p>
          This mansion may looks scary. But you will see, there is no <GlitchText>danger</GlitchText> in it.
        </p>,
      ],
      interactives: {
        byId: {
          0: {
            id: 0,
            title: 'Mail box',
            item: 1,
            message: 'Close to the entry door, a mailbox is open. Some items are still in it',
            path: 'M 326.762 16.925 L 418.428 175.696 L 235.095 175.696 L 326.762 16.925 Z',
          },
          // 1: {
          //   id: 1,
          //   title: 'Ringbell',
          //   message: 'It rings, but no one is coming...',
          // },
        },
        // allIds: [0, 1],
        allIds: [0],
      },
    },
    1: {
      id: 1,
      title: 'Kitchen',
      component: 'Kitchen',
      locked: true,
      visited: false,
      illustration:
        'http://cdn5.dlp-media.com/resize/mwImage/1/640/360/75/wdpromedia.disney.go.com/media/wdpro-dlp-assets/prod/fr-fr/system/images/n015233_2020jul22_phantom-manor_16-9.jpg',
      firstEntryMessages: [<p>This is the kitchen</p>],
    },
    2: {
      id: 2,
      title: 'Library',
      component: 'Library',
      locked: false,
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
