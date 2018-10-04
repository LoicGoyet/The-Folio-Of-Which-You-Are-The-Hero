export const SWITCH_ROOM = 'logo-folio/rooms/SWITCH_ROOM';

export const defaultState = {
    active: 'Parvis',
    byRoom: {
        'Parvis': {
            locked: false,
        },
        'Kitchen': {
            locked: false,
        },
    },
    allRooms: ['Parvis', 'Kitchen'],
}

export default (state = defaultState, action = {}) => {
    switch (action.type) {
        case SWITCH_ROOM: {
            return {
                ...state,
                active: action.room,
            }
        }

        default: {
            return state;
        }
    }
};

export const switchRoom = room => ({
    type: SWITCH_ROOM,
    room,
});