import React from 'react';

import RoomPropTypes from '../types/room';

class RoomComponent extends React.Component {
  static propTypes = {
    ...RoomPropTypes,
  };

  componentWillUnmount = () => {
    console.log('room unmount');
  };
}

export default RoomComponent;
