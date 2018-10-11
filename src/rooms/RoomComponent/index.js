import React from 'react';
import PropTypes from 'prop-types';
import { path } from 'ramda';

import './style.scss';
import MouseLabel from '../../components/MouseLabel';

class RoomComponent extends React.Component {
  static propTypes = {
    addMessage: PropTypes.func.isRequired,
    moveToRoom: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    setRoomAsVisited: PropTypes.func.isRequired,
    addInInventory: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    id: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
    title: PropTypes.string.isRequired,
    component: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    locked: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
    visited: PropTypes.bool.isRequired,
    firstEntryMessages: PropTypes.arrayOf(PropTypes.object),
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

  interact = interactive => {
    const { addMessage, items, addInInventory } = this.props;
    const { message } = interactive;
    addMessage(message);
    if (!interactive.item) return;
    const item = path(['byId', interactive.item], items);
    addInInventory(item.id);
  };

  exit = exit => {
    const { moveToRoom } = this.props;
    moveToRoom(exit.room);
  };

  render() {
    const { title, interactives, exits } = this.props;
    return (
      <div>
        <h1 className="room-component__title">{title}</h1>

        <svg width="100%" height="100%" viewBox="0 0 960 720">
          {!!interactives &&
            interactives.allIds.map(interactiveId => {
              const interactive = path(['byId', interactiveId], interactives);

              return (
                <MouseLabel title={interactive.title} key={interactive.id}>
                  <path
                    className="room-component__interactive"
                    d={interactive.path}
                    strokeLinecap="square"
                    onClick={() => this.interact(interactive)}
                  />
                </MouseLabel>
              );
            })}

          {!!exits &&
            exits.allIds.map(exitId => {
              const exit = path(['byId', exitId], exits);

              return (
                <MouseLabel title={exit.title} key={exit.id}>
                  <path
                    className="room-component__exit"
                    d={exit.path}
                    strokeLinecap="square"
                    onClick={() => this.exit(exit)}
                  />
                </MouseLabel>
              );
            })}
        </svg>

        {this.renderRoom}
      </div>
    );
  }
}

export default RoomComponent;
