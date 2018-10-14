import React from 'react';
import PropTypes from 'prop-types';
import { path } from 'ramda';

import './style.scss';
import RoomComponentInteractive from './interactive';
import RoomComponentExit from './exit';

class RoomComponent extends React.Component {
  static propTypes = {
    addMessage: PropTypes.func.isRequired,
    moveToRoom: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    setRoomAsVisited: PropTypes.func.isRequired,
    unlock: PropTypes.func.isRequired,
    addInInventory: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    id: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
    title: PropTypes.string.isRequired,
    locked: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
    visited: PropTypes.bool.isRequired,
    firstEntryMessages: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
    interactives: PropTypes.object,
    exits: PropTypes.object,
    items: PropTypes.object.isRequired,
  };

  static defaultProps = {
    firstEntryMessages: [],
    interactives: undefined,
    exits: undefined,
  };

  componentDidMount = () => {
    const { addMessage, firstEntryMessages, visited } = this.props;
    if (visited) return;
    setTimeout(() => firstEntryMessages.map(message => addMessage(message)), 750);
  };

  componentWillUnmount = () => {
    const { setRoomAsVisited, id } = this.props;
    return setRoomAsVisited(id);
  };

  render = () => {
    const { title, interactives, exits, moveToRoom, unlock, items, addMessage, addInInventory } = this.props;

    return (
      <div>
        <h1 className="room-component__title">{title}</h1>

        <svg width="100%" height="100%" viewBox="0 0 960 720">
          {!!interactives &&
            interactives.allIds.map(interactiveId => {
              const interactive = path(['byId', interactiveId], interactives);

              return (
                <RoomComponentInteractive
                  items={items}
                  interactive={interactive}
                  addInInventory={addInInventory}
                  addMessage={addMessage}
                  key={interactive.id}
                />
              );
            })}

          {!!exits &&
            exits.allIds.map(exitId => {
              const exit = path(['byId', exitId], exits);

              return (
                <RoomComponentExit key={exit.id} exit={exit} moveToRoom={moveToRoom} unlock={unlock} items={items} />
              );
            })}
        </svg>

        {this.renderRoom}
      </div>
    );
  };
}

export default RoomComponent;
