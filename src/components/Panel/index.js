import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Panel = ({ className, children }) => (
  <div
    className={classNames({
      panel: true,
      [className]: !!className,
    })}
  >
    {children}
  </div>
);

export default Panel;

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Panel.defaultProps = {
  className: undefined,
};
