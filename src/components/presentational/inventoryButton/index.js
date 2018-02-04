import React, { Component } from 'react'
import { createComponentWithProxy } from 'react-fela'
import { inventoryButton } from './style'

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

        const InventoryButton = createComponentWithProxy(inventoryButton, 'button')

        return (
            <div>
                <InventoryButton onClick={this.displayModal} emphasis={emphasis}>
                    {children}
                </InventoryButton>

                <Modal toShow={this.state.modalOpened} hideFunc={this.hideModal}>
                    {this.props.modal()}
                </Modal>
            </div>
        )
    }
}

export default InventoryButton
