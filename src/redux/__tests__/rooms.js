import reducer, { defaultState, moveToRoom, unlock, removeItem, setRoomAsVisited } from '../rooms';

it('defaultState is setup by default', () => {
  expect(reducer()).toEqual(defaultState);
});

it('move to room', () => {
  const goToRoom = 1;
  const state = reducer(defaultState, moveToRoom(goToRoom));
  expect(state.active).toEqual(goToRoom);
});

it('try to move into locked room', () => {
  const state = reducer(defaultState, moveToRoom(2));
  expect(state.active).toEqual(defaultState.active);
});

it('unlock room', () => {
  const unlockedRoom = 2;
  expect(defaultState.byId[unlockedRoom].locked).toEqual(true);
  const state = reducer(defaultState, unlock(unlockedRoom));
  expect(state.byId[unlockedRoom].locked).toEqual(false);
});

it('unlock room', () => {
  const notVisitedRoom = 0;
  expect(defaultState.byId[notVisitedRoom].visited).toEqual(false);
  const state = reducer(defaultState, setRoomAsVisited(notVisitedRoom));
  expect(state.byId[notVisitedRoom].visited).toEqual(true);
});

it('remove item', () => {
  const roomId = 2;
  const interactiveId = 0;

  expect(defaultState.byId[roomId].interactives.byId[interactiveId].item).toEqual(0);
  const state = reducer(defaultState, removeItem(roomId, interactiveId));
  expect(state.byId[roomId].interactives.byId[interactiveId].item).toEqual(null);
});
