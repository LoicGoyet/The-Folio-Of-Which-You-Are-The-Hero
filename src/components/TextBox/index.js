import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import classNames from 'classnames';

import './style.scss';

class TextBox extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    isTyping: PropTypes.bool,
    onTypingDone: PropTypes.func,
  };

  static defaultProps = {
    isTyping: true,
    onTypingDone: () => undefined,
  };

  static defaultProps = {
    className: undefined,
  };

  render = () => {
    const { children, className, isTyping, onTypingDone } = this.props;

    const config = {
      startDelay: 0,
      avgTypingDelay: 40,
      cursor: {
        show: false,
      },
      onTypingDone,
    };

    return (
      <div
        className={classNames({
          'text-box': true,
          [className]: !!className,
        })}
      >
        {isTyping && <Typist {...config}>{children}</Typist>}
        {!isTyping && children}
      </div>
    );
  };
}

export default TextBox;
