import React from 'react';
import './style.scss';

import RoomComponent from '../RoomComponent';

class Kitchen extends RoomComponent {
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
