import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const GlitchText = ({ children, className, type }) => (
  <span
    className={classNames({
      'glitch-text': true,
      [className]: !!className,
      [`glitch-text--${type}`]: true,
    })}
    data-text={children}
  >
    {children}
  </span>
);

GlitchText.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['default', 'item', 'room']),
};

GlitchText.defaultProps = {
  className: undefined,
  type: 'default',
};

export default GlitchText;
