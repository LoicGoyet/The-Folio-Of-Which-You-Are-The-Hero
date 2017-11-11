import React, { Component } from 'react'
import Typist from 'react-typist';
import BlinkContent from '../blinkContent'
import { isTouchDevice } from '../../../utils/device'
import './style.css'

class Type extends Component {
  constructor(props) {
    super(props)
    const { visited = false } = props

    this.touchBehavior = isTouchDevice();

    this.state = {
      stream: !visited,
      message: false,
    }

    this.cancelStreamOnTouch = this.cancelStreamOnTouch.bind(this)
    this.cancelStreamOnPressSpace = this.cancelStreamOnPressSpace.bind(this)
  }

  cancelStreamOnTouch() {
    this.setState({stream: false})
  }

  cancelStreamOnPressSpace(event) {
    if (event.keyCode === 32) { // Spacebar
      this.setState({stream: false})
    }
  }

  componentWillMount() {
    if (this.touchBehavior) {
      document.addEventListener("click", this.cancelStreamOnTouch);
    } else {
      document.addEventListener("keydown", this.cancelStreamOnPressSpace);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.cancelStreamOnTouch);
    document.removeEventListener("keydown", this.cancelStreamOnPressSpace);
  }

  onCharacterTyped() {
    this.setState({message: true})
  }

  onTypingDone() {
    this.setState({message: false})
  }

  render() {
    const { stream, message } = this.state

    const config = {
      startDelay: 500,
      cursor: {
        show: false,
      },
      onTypingDone: this.onTypingDone.bind(this),
      onCharacterTyped: this.onCharacterTyped.bind(this),
    }

    if (stream) {
      return (
        <div>
          <Typist {...config}>
            {this.props.children}
          </Typist>

          { message && (
            <BlinkContent className="type__message">
              { this.touchBehavior && (
                <span>Touch the screen to skip</span>
              ) }

              { !this.touchBehavior && (
                <span>Press SPACEBAR to skip</span>
              ) }
            </BlinkContent>
          ) }
        </div>
      )
    }

    return <div>{this.props.children}</div>
  }
}

export default Type