import React, { Component } from 'react'
import './style.css'

import Modal from '../modal'

class InventoryButton extends Component {
  constructor(props) {
    super(props)

    this.displayModal = this.displayModal.bind(this)
    this.hideModal = this.hideModal.bind(this)

    this.state = {
      modalOpened: false,
    }
  }

  displayModal() {
    this.props.unsetEmphasis()
    return this.setState({modalOpened: true})
  }

  hideModal() {
    this.setState({modalOpened: !this.state.modalOpened});
  }

  render() {
    const {emphasis = false, children} = this.props

    return (
      <div>
        <button onClick={this.displayModal} className={`inventory-button ${emphasis ? 'emphasis': ''}`}>
          {children}
        </button>

        <Modal toShow={this.state.modalOpened} hideFunc={this.hideModal}>
          {this.props.modal()}
        </Modal>
      </div>
    )
  }
}

export default InventoryButton