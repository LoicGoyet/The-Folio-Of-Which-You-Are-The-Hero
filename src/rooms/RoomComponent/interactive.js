import React from 'react';
import PropTypes from 'prop-types';
import { path } from 'ramda';

import MouseLabel from '../../components/MouseLabel';

class RoomComponentInteractive extends React.Component {
  static propTypes = {
    interactive: PropTypes.object.isRequired,
    addMessage: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired,
    addInInventory: PropTypes.func.isRequired,
  };

  onClick = interactive => {
    const { addMessage, items, addInInventory } = this.props;
    const { message } = interactive;
    addMessage(message);
    if (!interactive.item) return;
    const item = path(['byId', interactive.item], items);
    addInInventory(item.id);
  };

  render = () => {
    const { interactive } = this.props;

    return (
      <MouseLabel title={interactive.title} key={interactive.id}>
        <path
          className="room-component__interactive"
          d={interactive.path}
          strokeLinecap="square"
          onClick={() => this.onClick(interactive)}
        />
      </MouseLabel>
    );
  };
}

export default RoomComponentInteractive;
