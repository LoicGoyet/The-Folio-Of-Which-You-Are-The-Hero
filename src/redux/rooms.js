import { assocPath } from 'ramda';

import bedroomIllustration from '../rooms/Bedroom/illustration.gif';
import hallIllustration from '../rooms/Hall/illustration.gif';
import kitchenIllustration from '../rooms/Kitchen/illustration.gif';
import livingRoomIllustration from '../rooms/LivingRoom/illustration.gif';
import officeIllustration from '../rooms/Office/illustration.gif';
import parvisIllustration from '../rooms/Parvis/illustration.gif';

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
      firstEntryMessages: ['Entering the Parvis'],
      exits: {
        byId: {
          0: {
            id: 0,
            room: 1,
            path:
              'M526.5,618.5v-87c0,0-8.5-12.5,0-12.5s18,0,18,0s12-38.5,51-40s50,36.5,50,36.5l25-1c0,0-0.5,15.5-9,16.5l-2.5,87.5H526.5z',
          },
        },
        allIds: [0],
      },
    },
    1: {
      id: 1,
      title: 'Hall',
      component: 'Hall',
      locked: false,
      visited: false,
      illustration: hallIllustration,
      firstEntryMessages: ['Entering the Hall'],
      // interactives: {
      //   byId: {
      //     0: {
      //       id: 0,
      //       title: 'Mail box',
      //       item: 1,
      //       message: 'Close to the entry door, a mailbox is open. Some items are still in it',
      //       path: 'M424,412.75l108.625-10.5l-0.438,143.5L429.219,574.5l-1.359-39c0,0-0.859-2.75-3.859-2.5V412.75z',
      //     },
      //   },
      //   allIds: [0],
      // },
      exits: {
        byId: {
          0: {
            id: 0,
            room: 2,
            path: 'M48.5,396l-48,243v81l163-18l33-275c0,0,0-6-10-8S48.5,396,48.5,396z',
          },
          1: {
            id: 1,
            room: 3,
            path: 'M329.5,474c0,0,60-16,62-13l-6,223l-65-3L329.5,474z',
          },
          2: {
            id: 2,
            room: 4,
            path:
              'M685.5,677v-17l7-6h19v-13h6c0,0,11,2,18,0c0,0,1-16,0-27l97-132h60l32,151l-5,8l5,43  C924.5,684,674.5,682,685.5,677z',
          },
        },
        allIds: [0, 1, 2],
      },
    },
    2: {
      id: 2,
      title: 'Living Room',
      component: 'Living Room',
      locked: false,
      visited: false,
      illustration: livingRoomIllustration,
      firstEntryMessages: ['Entering the Living Room'],
      interactives: {
        byId: {
          0: {
            id: 0,
            title: 'Interactive 1',
            item: 0,
            message: 'Interactive 1',
            path:
              'M286.335,422.335c0,0-18-3.667-18.667,3c0,0-8.667-4.332-9,9.334s2,128.999,2,128.999  s24.667,14.667,27.667,14.667s120.667-8.666,121.333-11.333s2-68.667,2-68.667s-7-5.666-17.667-6.333c0,0,0.333-12.334-2.333-13.334  s-28.333-10.666-28.333-10.666l-4.999-44.001C358.336,424.001,351.667,410.336,286.335,422.335z',
          },
          1: {
            id: 1,
            title: 'Interactive 2',
            // item: 1,
            message: 'Interactive 2',
            path: 'M431,404.5l-17.5,50v56h103v-57l-10.5-49C506,404.5,463.5,401.75,431,404.5z',
          },
        },
        allIds: [0, 1],
      },
      exits: {
        byId: {
          0: {
            id: 0,
            room: 1,
            path: 'M72,240c0,0-1-18.5,3-18.5s104.5,5.5,104.5,5.5L172,511.5L71.889,524L72,240z',
          },
          1: {
            id: 1,
            room: 5,
            path:
              'M619.333,393.001L621,288.334c0,0,2-9.666,0-14.333c0,0,7.999-2.333,7.666-7L710,265.334l2,135  C712,400.334,716.999,397.334,619.333,393.001z',
          },
        },
        allIds: [0, 1],
      },
    },
    3: {
      id: 3,
      title: 'Kitchen',
      component: 'Kitchen',
      locked: false,
      visited: false,
      illustration: kitchenIllustration,
      firstEntryMessages: ['Entering the Kitchen'],
      interactives: {
        byId: {
          0: {
            id: 0,
            title: 'Interactive 1',
            // item: 1,
            message: 'Interactive 1',
            path:
              'M135,514c0,0-7.5,2.309-7,16.404S127.976,608,127.976,608S257,578.5,260.5,575l-3.5-72c0,0,2.5-5-12.5-3.5  L135,514z',
          },
          1: {
            id: 1,
            title: 'Interactive 2',
            // item: 1,
            message: 'Interactive 2',
            path:
              'M348,483.75c0,0-3.75-0.5-3.75,7.25s1.875,62.609,1.875,62.609S346.5,555.5,350,555s68.75-18.5,68.75-18.5  v-56c0,0-1.25-4-7.75-3.25S348,483.75,348,483.75z',
          },
          2: {
            id: 2,
            title: 'Interactive 3',
            // item: 1,
            message: 'Interactive 3',
            path: 'M716.5,442l-91.5,3c0,0-2.5,3.5,0,6.5s7.5,5,7.5,9.5s-4,48,0.5,49s327,47.5,327,47.5V455L716.5,442z',
          },
        },
        allIds: [0, 1, 2],
      },
      exits: {
        byId: {
          0: {
            id: 0,
            room: 1,
            path:
              'M399,235c0,0,75,21,81,25v258l-48.625,12.404l-1.257-64.49l5.254-0.174l1.3-9.752L434.333,454L399,451  C399,451,395.333,238.667,399,235z',
          },
        },
        allIds: [0],
      },
    },
    4: {
      id: 4,
      title: 'Bedroom',
      component: 'Bedroom',
      locked: false,
      visited: false,
      illustration: bedroomIllustration,
      firstEntryMessages: ['Entering the Bedroom'],
      interactives: {
        byId: {
          0: {
            id: 0,
            title: 'Interactive 1',
            // item: 1,
            message: 'Interactive 1',
            path: 'M124,276c0,0-6,93,17,91s162-17,167-26c0,0-8-62-26-65S143,268,124,276z',
          },
          1: {
            id: 1,
            title: 'Interactive 2',
            // item: 1,
            message: 'Interactive 2',
            path:
              'M402,446c0,0-4,181,0,215c0,0,131,59,136,59s284-121,287-132s13-158,13-158s6-9-13-14s-130-27-130-27  L402,446z',
          },
        },
        allIds: [0, 1],
      },
      exits: {
        byId: {
          0: {
            id: 0,
            room: 1,
            path: 'M655,350c0,0-1-280,5-281l127-14l-13,348h-21c0,0-12-48-40-50L655,350z',
          },
        },
        allIds: [0],
      },
    },
    5: {
      id: 5,
      title: 'Office',
      component: 'Office',
      locked: true,
      visited: false,
      illustration: officeIllustration,
      firstEntryMessages: ['Entering the Office'],
      interactives: {
        byId: {
          0: {
            id: 0,
            title: 'Interactive 1',
            // item: 1,
            message: 'Interactive 1',
            path:
              'M738,172.667c0,0,39.333,7.333,49.333,14c0,0-19.334,83.334-24.667,82.667s-21.999,1.333-40.666-8.667  L738,172.667z',
          },
          1: {
            id: 1,
            title: 'Interactive 2',
            // item: 1,
            message: 'Interactive 2',
            path:
              'M242,110.5l80-43c0,0,7.5-2,9,6.5l18,119c0,0-139,95.5-142,95.5l-18-69c0,0,4.5-8.5,7-6.5s47,43.5,47,43.5  s7.5-1,10-13.5c0,0,14.5-9.5,16-21l10.5-41.5c0,0-14.5-23.5-42-22l-10,31.5l-8.5,0.5l-5.5,19l-6.5-2l-6-2.5c0,0,0-4.5,3-8l42.5-63  C246.5,134,245.5,123,242,110.5z',
          },
          2: {
            id: 2,
            title: 'Interactive 3',
            // item: 1,
            message: 'Interactive 3',
            path:
              'M365,93l2.5,64c0,0-1.167,2,2.833,2s93.667,3.667,95.333,0V99c0,0-2.333-3.333-8.667-3.333S365,93,365,93z',
          },
          3: {
            id: 3,
            title: 'Interactive 4',
            // item: 1,
            message: 'Interactive 4',
            path: 'M773,286.5c0,0,33-1,47.5,13L800,380c0,0-25-5.5-41-15L773,286.5z',
          },
          4: {
            id: 4,
            title: 'Interactive 4',
            // item: 1,
            message: 'Interactive 4',
            path: 'M0,351.334L92.667,282c0,0,10.667-1.667,11.333,6.5s11.333,30.834,11.333,30.834L0,408V351.334z',
          },
        },
        allIds: [0, 1, 2, 3, 4],
      },
      exits: {
        byId: {
          0: {
            id: 0,
            room: 2,
            path: 'M960,0v365l-125-49L924.668,2.667C924.668,2.667,921.332-1.333,960,0z',
          },
        },
        allIds: [0],
      },
    },
  },
  allIds: [0, 1, 2, 3, 4, 5],
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
