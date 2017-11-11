import React from 'react'
import './style.css'

const RoomIllustration = ({src, alt}) => (
  <div className="room-illustration">
    <img src={src} alt={alt}/>
  </div>
)

export default RoomIllustration