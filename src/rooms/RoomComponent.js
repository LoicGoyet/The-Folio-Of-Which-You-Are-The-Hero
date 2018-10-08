import React from 'react';
import PropTypes from 'prop-types';

class RoomComponent extends React.Component {
  static propTypes = {
    addMessage: PropTypes.func.isRequired,
    moveToRoom: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    id: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
    title: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    component: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    locked: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
    firstEntryMessages: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    firstEntryMessages: [],
  };

  componentDidMount = () => {
    const { addMessage, firstEntryMessages } = this.props;
    return firstEntryMessages.map(message => addMessage(message));
  };

  componentWillUnmount = () => {
    console.log('room unmount');
  };
}

export default RoomComponent;
