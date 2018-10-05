import reducer, { defaultState, move, unlock } from '../rooms';

it('defaultState is setup by default', () => {
  expect(reducer()).toEqual(defaultState);
});

it('move room', () => {
  const goToRoom = 'Kitchen';
  const state = reducer(defaultState, move(goToRoom));
  expect(state.active).toEqual(goToRoom);
});

it('unlock room', () => {
  const unlockedRoom = 'Kitchen';
  expect(defaultState.byTitle[unlockedRoom].locked).toEqual(true);
  const state = reducer(defaultState, unlock(unlockedRoom));
  expect(state.byTitle[unlockedRoom].locked).toEqual(false);
});
