import React from 'react';
import './style.scss';

import RoomComponent from '../RoomComponent';
import GlitchText from '../../components/GlitchText';

class Parvis extends RoomComponent {
  get renderRoom() {
    const { addMessage, moveToRoom, addInInventory } = this.props;

    return (
      <React.Fragment>
        <button
          type="button"
          onClick={() =>
            addMessage(
              <p>
                This text is a test with a <GlitchText>GlitchText</GlitchText>. And it looks like it works !
              </p>
            )
          }
        >
          Text without action
        </button>

        <button type="button" onClick={() => moveToRoom(1)}>
          go to kitchen
        </button>

        <button type="button" onClick={() => addInInventory(0)}>
          Get key
        </button>
      </React.Fragment>
    );
  }
}

export default Parvis;
