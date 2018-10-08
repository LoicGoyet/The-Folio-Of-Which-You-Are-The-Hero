import React from 'react';
import './style.scss';

import RoomPropTypes from '../../types/room';

class Kitchen extends React.Component {
  static propTypes = {
    ...RoomPropTypes,
  };

  render() {
    const { moveToRoom } = this.props;

    return (
      <React.Fragment>
        <p className="kitchen">Kitchen</p>

        <button type="button" onClick={() => moveToRoom(0)}>
          go to parvis
        </button>
      </React.Fragment>
    );
  }
}

export default Kitchen;
