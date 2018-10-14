import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import classNames from 'classnames';

import './style.scss';
import Blink from '../Blink';
import Panel from '../Panel';

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
      <Panel
        className={classNames({
          'text-box': true,
          [className]: !!className,
        })}
      >
        {isTyping && (
          <React.Fragment>
            <Typist {...config}>{children}</Typist>
            <Blink className="text-box__ui-hint">click to pass</Blink>
          </React.Fragment>
        )}

        {!isTyping && (
          <React.Fragment>
            {children}
            <Blink className="text-box__ui-hint">click to continue</Blink>
          </React.Fragment>
        )}
      </Panel>
    );
  };
}

export default TextBox;
