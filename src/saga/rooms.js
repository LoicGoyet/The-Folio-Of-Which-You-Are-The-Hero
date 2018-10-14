import React from 'react';
import { put, select, takeEvery } from 'redux-saga/effects';
import { path } from 'ramda';

import { ADD_MESSAGE } from '../redux/messages';
import { UNLOCK, MOVE_TO_ROOM } from '../redux/rooms';
import GlitchText from '../components/GlitchText';

export function* addMessageOnUnlock(payload) {
  const room = yield select(state => path(['byId', payload.id], state.rooms));
  const item = yield select(state => path(['byId', room.unlockItem], state.items));

  yield put({
    type: ADD_MESSAGE,
    content: (
      <p>
        With the <GlitchText type="item">{item.title}</GlitchText>, You unlock the{' '}
        <GlitchText type="room">{room.title}</GlitchText>
      </p>
    ),
  });
}

export function* addMessageOnLockedRoomMove(payload) {
  const room = yield select(state => path(['byId', payload.id], state.rooms));

  if (room.locked) {
    yield put({
      type: ADD_MESSAGE,
      content: (
        <p>
          The access to the <GlitchText type="room">{room.title}</GlitchText> is locked. Try to find out an item to
          unlock this door.
        </p>
      ),
    });
  }
}

export default function*() {
  yield takeEvery(UNLOCK, addMessageOnUnlock);
  yield takeEvery(MOVE_TO_ROOM, addMessageOnLockedRoomMove);
}
