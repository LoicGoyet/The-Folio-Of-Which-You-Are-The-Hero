import reducer, {defaultState, switchRoom} from '../rooms';

it('defaultState is setup by default', () => {
    expect(reducer()).toEqual(defaultState);
});

it('switch room', () => {
    const newRoom = 'Kitchen';
    const state = reducer(defaultState, switchRoom(newRoom));
    expect(state.active).toEqual(newRoom)
})