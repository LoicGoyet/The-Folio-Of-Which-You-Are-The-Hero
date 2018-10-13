import React from 'react';
import PropTypes from 'prop-types';

import MouseLabel from '../../components/MouseLabel';

class RoomComponentExit extends React.Component {
  static propTypes = {
    moveToRoom: PropTypes.func.isRequired,
    exit: PropTypes.object.isRequired,
  };

  onClick = () => {
    const { moveToRoom, exit } = this.props;
    moveToRoom(exit.room.id);
  };

  get mouseLabel() {
    const { exit } = this.props;
    return `Go to the ${exit.room.title}`;
  }

  render = () => {
    const { exit } = this.props;

    return (
      <MouseLabel title={this.mouseLabel} key={exit.id}>
        <path className="room-component__exit" d={exit.path} strokeLinecap="square" onClick={this.onClick} />
      </MouseLabel>
    );
  };
}

export default RoomComponentExit;
