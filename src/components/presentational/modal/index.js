import React, { Component } from 'react'
import './style.css'

class Modal extends Component {
  backdropClick(event) {
    return this.props.hideFunc()
  }

  render() {
    const { toShow, hideFunc } = this.props

    if (toShow) {
      return (
        <div className="modal" onClick={hideFunc}>
          <div className="modal__dialog" onClick={e => e.stopPropagation()}>
            <div className="modal__inner">
              {this.props.children}
            </div>
          </div>
        </div>
      )
    }

    return <span></span>
  }
}

export default Modal