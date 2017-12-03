import React from 'react'
import './style.css'

const Modal = ({toShow, hideFunc, children}) => {
  if (!toShow) return null

  return (
    <div className="modal" onClick={hideFunc}>
      <div className="modal__dialog" onClick={e => e.stopPropagation()}>
        <div className="modal__inner">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
