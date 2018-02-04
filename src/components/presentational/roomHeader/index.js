import React from 'react'
import GlitchText from '../glitchText'
import Button from '../button'
import { createComponent, createComponentWithProxy } from 'react-fela'
import { roomHeader, roomHeaderResetBtn } from './style'

const RoomHeaderWrapper = createComponent(roomHeader, 'header')
const RoomHeaderResetBtn = createComponentWithProxy(roomHeaderResetBtn, Button)

const RoomHeader = ({resetState, ...props}) => (
  <RoomHeaderWrapper>
    <RoomHeaderResetBtn framed size="sm" onClick={e => resetState()}>reset</RoomHeaderResetBtn>

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
