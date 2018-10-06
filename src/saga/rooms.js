import { takeEvery, put } from 'redux-saga/effects';

import { ADD_IN_INVENTORY } from '../redux/items';
import { REMOVE_ITEM } from '../redux/rooms';

export function* removeItemInRoom(payload) {
  const { roomId, interactiveId, itemId } = payload;

  yield put({
    type: REMOVE_ITEM,
    roomId,
    interactiveId,
    itemId,
  });
}

export default function*() {
  yield takeEvery(ADD_IN_INVENTORY, removeItemInRoom);
}
