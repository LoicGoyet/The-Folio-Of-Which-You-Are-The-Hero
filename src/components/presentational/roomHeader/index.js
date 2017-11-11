import React from 'react'
import GlitchText from '../glitchText'
import './style.css'

const RoomHeader = ({resetState, ...props}) => (
  <header className="room-header">
    <button onClick={e => resetState()}>reset</button>

    <div>
      <GlitchText
        className="room-header__subtitle"
        text="the folio of which"
      />

      <GlitchText
        className="room-header__title"
        text="Loïc Goyet"
      />

      <GlitchText
        className="room-header__subtitle"
        text="you are the hero"
      />
    </div>
  </header>
)

export default RoomHeader
