import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class RoomComponent extends React.Component {
  static propTypes = {
    addMessage: PropTypes.func.isRequired,
    moveToRoom: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    setRoomAsVisited: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
    title: PropTypes.string.isRequired,
    component: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    locked: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
    visited: PropTypes.bool.isRequired,
    firstEntryMessages: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    firstEntryMessages: [],
  };

  componentDidMount = () => {
    const { addMessage, firstEntryMessages, visited } = this.props;
    if (visited) return;
    return firstEntryMessages.map(message => addMessage(message));
  };

  componentWillUnmount = () => {
    const { setRoomAsVisited, id } = this.props;
    return setRoomAsVisited(id);
  };

  render() {
    const { title } = this.props;
    return (
      <div>
        <h1 className="room-component__title">{title}</h1>

        {this.renderRoom}
      </div>
    );
  }
}

export default RoomComponent;
