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
  };

  componentDidMount() {
    const { message } = this.props;
    if (message && !message.read) setTimeout(this.open, 1);
  }

  componentDidUpdate(prevProps) {
    const { message } = this.props;
    if (message === prevProps.message) return null;
    if (message && !message.read) setTimeout(this.open, 1);
  }

  backdropClick = () => {
    const { onEndReading, message } = this.props;
    this.close();
    setTimeout(() => onEndReading(message.id), 300);
  };

  open = () => {
    this.setState({ isOpen: true });
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  render = () => {
    const { message } = this.props;
    const { isOpen } = this.state;
    if (!message) return null;

    return (
      <React.Fragment>
        <button type="button" className="messages-feed__backdrop-btn" onClick={this.backdropClick} />
        <TextBox
          key={message.id}
          className={classNames({
            'messages-feed__text-box': true,
            'messages-feed__text-box--is-open': isOpen,
          })}
        >
          {message.content}
        </TextBox>
      </React.Fragment>
    );
  };
}

export default MessagesFeed;
