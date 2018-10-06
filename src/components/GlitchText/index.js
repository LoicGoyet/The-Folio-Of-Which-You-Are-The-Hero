import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const GlitchText = ({ children, className }) => (
  <span className={`glitch-text ${className}`} data-text={children}>
    {children}
  </span>
);

GlitchText.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

GlitchText.defaultProps = {
  className: undefined,
};

export default GlitchText;
