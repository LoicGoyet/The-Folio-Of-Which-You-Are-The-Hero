import React from 'react'
import './style.css'

const Button = props => (
  <button className="btn" {...props}>
    {props.children}
  </button>
)

export default Button