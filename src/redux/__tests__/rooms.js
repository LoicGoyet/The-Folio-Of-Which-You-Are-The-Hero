import reducer, { defaultState, moveToRoom, unlock, removeItem } from '../rooms';

it('defaultState is setup by default', () => {
  expect(reducer()).toEqual(defaultState);
});

it('move to room', () => {
  const goToRoom = 1;
  const state = reducer(defaultState, moveToRoom(goToRoom));
  expect(state.active).toEqual(goToRoom);
});

it('unlock room', () => {
  const unlockedRoom = 1;
  expect(defaultState.byId[unlockedRoom].locked).toEqual(true);
  const state = reducer(defaultState, unlock(unlockedRoom));
  expect(state.byId[unlockedRoom].locked).toEqual(false);
});

it('remove item', () => {
  const roomId = 2;
  const interactiveId = 0;
  const itemId = 0;

  const state = reducer(defaultState, removeItem(roomId, interactiveId, itemId));
  expect(state.byId[roomId].interactives.byId[interactiveId].items).toEqual([]);
});
