import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Screen extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    illustration: PropTypes.string,
    activeRoom: PropTypes.any.isRequired,
  };

  static defaultProps = {
    children: undefined,
    illustration:
      'https://raw.githubusercontent.com/LoicGoyet/The-Folio-Of-Which-You-Are-The-Hero/master/src/components/rooms/entrance/illustration.gif',
  };

  state = {
    isSwitchingOn: true,
    isTransitioning: false,
  };

  componentDidMount = () => {
    this.handleSwitchingOn();
  };

  componentDidUpdate = prevProps => {
    const { activeRoom } = this.props;

    if (prevProps.activeRoom === activeRoom) return;
    return this.handleRoomTransition();
  };

  handleSwitchingOn = () => {
    setTimeout(() => {
      this.setState({ isSwitchingOn: false });
    }, 1000);
  };

  handleRoomTransition = () => {
    this.setState({ isTransitioning: true });

    setTimeout(() => {
      this.setState({ isTransitioning: false });
    }, 240);
  };

  render() {
    const { children, illustration } = this.props;
    const { isSwitchingOn, isTransitioning } = this.state;

    return (
      <div
        className={classNames({
          screen: true,
          'screen--no-interaction': isSwitchingOn || isTransitioning,
        })}
      >
        <div
          className="screen__glitch"
          style={{
            backgroundImage: `url("${illustration}")`,
          }}
        />
        <div
          className={classNames({
            screen__inner: true,
            'screen__inner--is-switching-on': isSwitchingOn,
            'screen__inner--is-transitioning': isTransitioning,
          })}
          style={{
            backgroundImage: `url("${illustration}")`,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Screen;
