import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { path } from 'ramda';

import Kitchen from '../../rooms/Kitchen';
import Parvis from '../../rooms/Parvis';
import RoomComponent from '../../rooms/RoomComponent';
import { addMessage } from '../../redux/messages';
import { moveToRoom, setRoomAsVisited, unlock } from '../../redux/rooms';
import { addInInventory } from '../../redux/items';

const Rooms = {
  Kitchen,
  Parvis,
};

const mapStateToProps = state => {
  const { rooms, items } = state;
  const room = rooms.byId[rooms.active];

  return {
    ...room,
    items,
    exits: {
      ...room.exits,
      byId: room.exits.allIds.map(exitId => {
        const roomId = room.exits.byId[exitId].room;

        return {
          ...room.exits.byId[exitId],
          room: rooms.byId[roomId],
        };
      }),
    },
  };
};

const mapDispatchToProps = dispatch => ({
  addMessage: bindActionCreators(addMessage, dispatch),
  moveToRoom: bindActionCreators(moveToRoom, dispatch),
  unlock: bindActionCreators(unlock, dispatch),
  setRoomAsVisited: bindActionCreators(setRoomAsVisited, dispatch),
  addInInventory: bindActionCreators(addInInventory, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  const Component = path([props.component], Rooms) || RoomComponent;
  return <Component {...props} />;
});
