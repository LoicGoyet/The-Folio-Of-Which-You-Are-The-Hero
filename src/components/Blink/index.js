import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Blink = ({ children, className }) => (
  <div
    className={classNames({
      blink: true,
      [className]: !!className,
    })}
  >
    {children}
  </div>
);

export default Blink;

Blink.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

Blink.defaultProps = {
  className: undefined,
};
