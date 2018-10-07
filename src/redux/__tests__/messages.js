import reducer, { defaultState, add, setAsRead } from '../messages';

export const mock = {
  byId: {
    0: {
      id: 0,
      message: 'hello world !',
      read: false,
      createdAt: 1538918765904,
    },
    1: {
      id: 1,
      message: 'hello world !',
      read: false,
      createdAt: 1538918783374,
    },
  },
  allIds: [0, 1],
};

it('defaultState is setup by default', () => {
  expect(reducer()).toEqual(defaultState);
});

it('add a first message', () => {
  const state = reducer(defaultState, add('coucou'));
  expect(state.allIds).toEqual([0]);
  expect(state.byId[0].message).toEqual('coucou');
});

it('add a message', () => {
  const state = reducer(mock, add('mamène'));
  expect(state.allIds).toEqual([0, 1, 2]);
  expect(state.byId[2].message).toEqual('mamène');
});

it('set as read a message', () => {
  expect(mock.byId[0].read).toEqual(false);
  const state = reducer(mock, setAsRead(0));
  expect(state.byId[0].read).toEqual(true);
});
