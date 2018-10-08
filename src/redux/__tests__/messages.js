import reducer, { defaultState, addMessage, setMessageAsRead } from '../messages';

export const mock = {
  byId: {
    0: {
      id: 0,
      content: 'hello world !',
      read: false,
      createdAt: 1538918765904,
    },
    1: {
      id: 1,
      content: 'hello world 2',
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
  const state = reducer(defaultState, addMessage('coucou'));
  expect(state.allIds).toEqual([0]);
  expect(state.byId[0].content).toEqual('coucou');
});

it('add a message', () => {
  const state = reducer(mock, addMessage('mamène'));
  expect(state.allIds).toEqual([0, 1, 2]);
  expect(state.byId[2].content).toEqual('mamène');
});

it('set as read a message', () => {
  expect(mock.byId[0].read).toEqual(false);
  const state = reducer(mock, setMessageAsRead(0));
  expect(state.byId[0].read).toEqual(true);
});
