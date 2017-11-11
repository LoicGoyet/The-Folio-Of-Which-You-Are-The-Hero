import React from 'react'
import './style.css'

const GlitchText = ({text, className = ''}) => (
  <span className={`glitch-text ${className}`} data-text={text}>{text}</span>
)

export default GlitchText