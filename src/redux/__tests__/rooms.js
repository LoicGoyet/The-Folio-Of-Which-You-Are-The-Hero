import reducer, { defaultState, move, unlock } from '../rooms';

it('defaultState is setup by default', () => {
  expect(reducer()).toEqual(defaultState);
});

it('move room', () => {
  const goToRoom = 1;
  const state = reducer(defaultState, move(goToRoom));
  expect(state.active).toEqual(goToRoom);
});

it('unlock room', () => {
  const unlockedRoom = 1;
  expect(defaultState.byId[unlockedRoom].locked).toEqual(true);
  const state = reducer(defaultState, unlock(unlockedRoom));
  expect(state.byId[unlockedRoom].locked).toEqual(false);
});
