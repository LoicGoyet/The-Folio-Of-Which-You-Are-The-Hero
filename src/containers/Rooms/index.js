import React from 'react';
import { connect } from 'react-redux';

import Kitchen from '../../rooms/Kitchen';
import Parvis from '../../rooms/Parvis';

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

export default connect(mapStateToProps)(props => {
  const Component = Rooms[props.room];
  return <Component {...props} />;
});
