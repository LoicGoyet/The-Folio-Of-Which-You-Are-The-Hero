import React from 'react';
import './style.scss';

import RoomComponent from '../RoomComponent';
import GlitchText from '../../components/GlitchText';

class Parvis extends RoomComponent {
  componentDidMount = () => {
    const { addMessage } = this.props;

    addMessage(
      <p>
        Welcome my <GlitchText>friend</GlitchText> !
      </p>
    );

    addMessage(
      <p>
        This mansion may looks scary. But you will see, there is no <GlitchText>danger</GlitchText> in it.
      </p>
    );
  };

  render() {
    const { addMessage, moveToRoom } = this.props;

    return (
      <p className="parvis">
        Parvis
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
      </p>
    );
  }
}

export default Parvis;
