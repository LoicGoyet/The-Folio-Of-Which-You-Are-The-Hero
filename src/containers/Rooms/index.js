import React from 'react';
import { connect } from 'react-redux';

import Kitchen from '../../rooms/Kitchen';
import Parvis from '../../rooms/Parvis';
import { addMessage } from '../../redux/messages';
import { moveToRoom } from '../../redux/rooms';

const Rooms = {
  Kitchen,
  Parvis,
};

const mapStateToProps = state => {
  const { rooms } = state;

  return {
    room: rooms.byId[rooms.active].component,
  };
};

const mapDispatchToProps = dispatch => ({
  addMessage: message => dispatch(addMessage(message)),
  moveToRoom: roomId => dispatch(moveToRoom(roomId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  const Component = Rooms[props.room];
  return <Component {...props} />;
});
