import { takeEvery, put, select } from 'redux-saga/effects'
import { HOUSE_ROOM_SWITCH } from '../actions/house'

export const HOUSE_ROOM_SET_AS_VISITED = 'HOUSE_ROOM_SET_AS_VISITED'
export function* houseRoomSetAsVisited() {
    const { currentRoom } = yield select(state => state.house)
    yield put({
        type: HOUSE_ROOM_SET_AS_VISITED,
        currentRoom,
    })
}

export const HOUSE_ROOM_UPDATE_CURRENTROOM = 'HOUSE_ROOM_UPDATE_CURRENTROOM'
export function* houseRoomUpdateCurrentroom({room}) {
    yield put({
        type: HOUSE_ROOM_UPDATE_CURRENTROOM,
        room,
    })
}

export default function* houseWatcher() {
    yield takeEvery(HOUSE_ROOM_SWITCH, houseRoomSetAsVisited)
    yield takeEvery(HOUSE_ROOM_SWITCH, houseRoomUpdateCurrentroom)
}