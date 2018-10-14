import React from 'react';
import PropTypes from 'prop-types';
import { path } from 'ramda';
import classNames from 'classnames';

import MouseLabel from '../../components/MouseLabel';

class RoomComponentExit extends React.Component {
  static propTypes = {
    moveToRoom: PropTypes.func.isRequired,
    unlock: PropTypes.func.isRequired,
    exit: PropTypes.object.isRequired,
    items: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types
  };

  onClick = () => {
    if (this.canBeUnlocked) return this.unlock();
    return this.moveToRoom();
  };

  get isLocked() {
    return path(['exit', 'room', 'locked'], this.props);
  }

  get canBeUnlocked() {
    const unlockItem = path(['exit', 'room', 'unlockItem'], this.props);
    const itemInInventory = path(['items', 'byId', unlockItem, 'inInventory'], this.props);
    return this.isLocked && itemInInventory;
  }

  get mouseLabel() {
    const { exit } = this.props;

    if (this.canBeUnlocked) return `Unlock access to the ${exit.room.title}`;
    if (this.isLocked) return `Locked (${exit.room.title})`;
    return `Go to the ${exit.room.title}`;
  }

  unlock = () => {
    const { unlock, exit } = this.props;
    return unlock(exit.room.id);
  };

  moveToRoom = () => {
    const { moveToRoom, exit } = this.props;
    return moveToRoom(exit.room.id);
  };

  render = () => {
    const { exit } = this.props;

    return (
      <MouseLabel title={this.mouseLabel} key={exit.id}>
        <path
          className={classNames({
            'room-component__exit': true,
            'can-be-unlocked': this.canBeUnlocked,
            'is-locked': this.isLocked,
          })}
          d={exit.path}
          strokeLinecap="square"
          onClick={this.onClick}
        />
      </MouseLabel>
    );
  };
}

export default RoomComponentExit;
