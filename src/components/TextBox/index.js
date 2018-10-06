import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

import './style.scss';

class TextBox extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  state = {
    isOpen: false,
  };

  componentDidMount() {
    setTimeout(this.open, 1);
  }

  open = () => {
    this.setState({ isOpen: true });
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  render = () => {
    const { children } = this.props;
    const { isOpen } = this.state;

    const config = {
      startDelay: 0,
      avgTypingDelay: 40,
      cursor: {
        show: false,
      },
    };

    return (
      <div className={`text-box ${isOpen && 'text-box--is-open'}`}>
        <Typist {...config}>{children}</Typist>
      </div>
    );
  };
}

export default TextBox;
