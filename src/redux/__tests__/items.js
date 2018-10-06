import reducer, { defaultState, addInInventory } from '../items';

it('defaultState is setup by default', () => {
  expect(reducer()).toEqual(defaultState);
});

it('add item in inventory', () => {
  const state = reducer(defaultState, addInInventory(2, 0, 0));
  expect(state.byId[0].inInventory).toEqual(true);
});
