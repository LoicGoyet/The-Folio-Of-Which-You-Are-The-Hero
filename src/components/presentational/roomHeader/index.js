import React from 'react'
import GlitchText from '../glitchText'
import Button from '../button'
import './style.css'

const RoomHeader = ({resetState, ...props}) => (
  <header className="room-header">
    <Button framed size="sm" onClick={e => resetState()}>reset</Button>

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
