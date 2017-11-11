import React from 'react'
import './style.css'

const BlinkContent = ({children, className = ''}) => (
  <div className={`blink-content ${className}`}>
    {children}
  </div>
)

export default BlinkContent