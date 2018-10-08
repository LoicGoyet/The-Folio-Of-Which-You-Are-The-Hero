import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import classNames from 'classnames';

import './style.scss';

class TextBox extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: undefined,
  };

  render = () => {
    const { children, className } = this.props;

    const config = {
      startDelay: 0,
      avgTypingDelay: 40,
      cursor: {
        show: false,
      },
    };

    return (
      <div
        className={classNames({
          'text-box': true,
          [className]: !!className,
        })}
      >
        <Typist {...config}>{children}</Typist>
      </div>
    );
  };
}

export default TextBox;
