import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class MouseLabel extends React.Component {
  state = {
    display: false,
    x: 0,
    y: 0,
  };

  static propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
  };

  onMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  onMouseEnter = () => {
    this.setState({ display: true });
  };

  onMouseLeave = () => {
    this.setState({ display: false });
  };

  get children() {
    const { children } = this.props;

    return React.Children.map(children, child =>
      React.cloneElement(child, {
        onMouseMove: this.onMouseMove,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
      })
    );
  }

  render = () => {
    const { display, x, y } = this.state;
    const { title } = this.props;
    return (
      <React.Fragment>
        <defs>
          <filter x="0" y="0" width="1" height="1" id="solid">
            <feFlood floodColor="black" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>

        {this.children}

        {display && (
          <text filter="url(#solid)" className="mouse-label" x={x + 10} y={y + 10}>
            {title}
          </text>
        )}
      </React.Fragment>
    );
  };
}

export default MouseLabel;
