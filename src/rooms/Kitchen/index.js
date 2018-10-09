import React from 'react';
import './style.scss';

import RoomComponent from '../RoomComponent';

class Kitchen extends RoomComponent {
  get renderRoom() {
    const { moveToRoom } = this.props;

    return (
      <React.Fragment>
        <button type="button" onClick={() => moveToRoom(0)}>
          go to parvis
        </button>
      </React.Fragment>
    );
  }
}

export default Kitchen;
