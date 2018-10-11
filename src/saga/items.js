import React from 'react';
import { takeEvery, put, select, all } from 'redux-saga/effects';
import { path } from 'ramda';

import { ADD_IN_INVENTORY } from '../redux/items';
import { REMOVE_ITEM } from '../redux/rooms';
import { ADD_MESSAGE } from '../redux/messages';
import GlitchText from '../components/GlitchText';

export function* removeItemInRoom({ itemId }) {
  const selectInteractiveId = roomInteractives =>
    roomInteractives.allIds.find(iId => {
      const interactiveItem = path(['byId', iId, 'item'], roomInteractives);
      if (!interactiveItem) return false;
      return interactiveItem === itemId;
    });

  const roomId = yield select(state =>
    state.rooms.allIds.find(rid => {
      const roomInteractives = path(['rooms', 'byId', rid, 'interactives'], state);
      if (!roomInteractives) return false;
      return selectInteractiveId(roomInteractives) >= 0;
    })
  );

  const interactiveId = yield select(state => {
    const roomInteractives = path(['rooms', 'byId', roomId, 'interactives'], state);
    if (!roomInteractives) return false;

    return selectInteractiveId(roomInteractives);
  });

  yield put({
    type: REMOVE_ITEM,
    roomId,
    interactiveId,
  });
}

export function* addMessageOnItemPickUp({ itemId }) {
  const { messages, title } = yield select(state => path(['items', 'byId', itemId], state));
  if (!messages) return;

  yield put({
    type: ADD_MESSAGE,
    content: (
      <p>
        You found a <GlitchText>{title}</GlitchText>.
      </p>
    ),
  });

  yield all(
    messages.map(function*(message) {
      yield put({
        type: ADD_MESSAGE,
        content: message,
      });
    })
  );
}

export default function*() {
  yield takeEvery(ADD_IN_INVENTORY, removeItemInRoom);
  yield takeEvery(ADD_IN_INVENTORY, addMessageOnItemPickUp);
}
