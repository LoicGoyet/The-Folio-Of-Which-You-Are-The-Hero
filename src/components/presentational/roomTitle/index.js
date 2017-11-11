import React from 'react'
import './style.css'

import GlitchText from '../glitchText'

const RoomTitle = ({title}) => (
  <h1 className="room-title">
    <GlitchText text={title}/>
  </h1>
)

export default RoomTitle