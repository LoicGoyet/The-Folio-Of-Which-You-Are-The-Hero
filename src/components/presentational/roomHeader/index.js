import React from 'react'
import GlitchText from '../glitchText'
import Button from '../button'
import { createComponent } from 'react-fela'
import { roomHeader } from './style'

const RoomHeaderWrapper = createComponent(roomHeader, 'header')

const RoomHeader = ({resetState, ...props}) => (
  <RoomHeaderWrapper>
    <Button framed size="sm" onClick={e => resetState()}>reset</Button>

    <div>
      <GlitchText
        className="subtitle"
        text="the folio of which"
        block
      />

      <GlitchText
        className="title"
        text="Loïc Goyet"
        block
      />

      <GlitchText
        className="subtitle"
        text="you are the hero"
        block
      />
    </div>
  </RoomHeaderWrapper>
)

export default RoomHeader
