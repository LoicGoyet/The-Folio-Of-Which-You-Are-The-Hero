import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import messageType from '../../types/message';
import TextBox from '../TextBox';
import './style.scss';

class MessagesFeed extends React.Component {
  static propTypes = {
    message: messageType,
    onEndReading: PropTypes.func,
  };

  static defaultProps = {
    message: undefined,
    onEndReading: () => undefined,
  };

  state = {
    isOpen: false,
    isTyping: true,
  };

  componentDidMount = () => {
    const { message } = this.props;
    if (message && !message.read) setTimeout(this.open, 1);

    this.spacebarListener = document.addEventListener('keydown', this.handleSpacebarPress);
  };

  componentDidUpdate = prevProps => {
    const { message } = this.props;
    if (message === prevProps.message) return null;
    if (message && !message.read) {
      setTimeout(this.open, 1);
      this.startTyping();
    }
  };

  componentWillUnmount = () => {
    this.spacebarListener = document.removeEventListener('keydown', this.handleSpacebarPress);
  };

  get textBoxProps() {
    const { isOpen, isTyping } = this.state;

    return {
      className: classNames({
        'messages-feed__text-box': true,
        'messages-feed__text-box--is-open': isOpen,
      }),
      isTyping,
      onTypingDone: this.endTyping,
    };
  }

  backdropClick = () => {
    const { onEndReading, message } = this.props;
    const { isTyping } = this.state;

    if (!message) return;
    if (isTyping) return this.endTyping();

    this.close();
    setTimeout(() => onEndReading(message.id), 300);
  };

  open = () => this.setState({ isOpen: true });

  close = () => this.setState({ isOpen: false });

  startTyping = () => this.setState({ isTyping: true });

  endTyping = () => this.setState({ isTyping: false });

  handleSpacebarPress = event => {
    if (event.keyCode === 32) this.backdropClick();
  };

  render = () => {
    const { message } = this.props;
    if (!message) return null;

    return (
      <React.Fragment>
        <button type="button" className="messages-feed__backdrop-btn" onClick={this.backdropClick} />

        {/* prettier-ignore */}
        <TextBox key={message.id} {...this.textBoxProps}>{message.content}</TextBox>
      </React.Fragment>
    );
  };
}

export default MessagesFeed;
