import React from 'react'
import { createComponent, createComponentWithProxy } from 'react-fela'
import { modal, modalDialog, modalInner } from './style'

export default ({toShow, hideFunc, children}) => {
    if (!toShow) return null

    const Modal = createComponentWithProxy(modal)
    const ModalDialog = createComponentWithProxy(modalDialog)
    const ModalInner = createComponent(modalInner)

    return (
        <Modal onClick={hideFunc}>
            <ModalDialog onClick={e => e.stopPropagation()}>
                <ModalInner>
                    {children}
                </ModalInner>
            </ModalDialog>
        </Modal>
    )
}
