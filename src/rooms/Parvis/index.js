import React from 'react';
import './style.scss';

import GlitchText from '../../components/GlitchText';
import RoomPropTypes from '../../types/room';

const Parvis = ({ addMessage }) => (
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
      test
    </button>
  </p>
);

Parvis.propTypes = {
  ...RoomPropTypes,
};

export default Parvis;
