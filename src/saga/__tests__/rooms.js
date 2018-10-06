import { put } from 'redux-saga/effects';

import { removeItemInRoom } from '../rooms';
import { removeItem } from '../../redux/rooms';

const stepper = fn => () => fn.next().value;

it('Remove item in room after pickup', () => {
  const step = stepper(
    removeItemInRoom({
      roomId: 2,
      interactiveId: 0,
      itemId: 0,
    })
  );

  expect(step()).toEqual(put(removeItem(2, 0, 0)));
});
