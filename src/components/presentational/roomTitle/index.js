import React from 'react'
import { createComponent } from 'react-fela'
import { roomTitle } from './style'

import GlitchText from '../glitchText'

const RoomTitleWrapper = createComponent(roomTitle, 'h1')

const RoomTitle = ({title}) => (
  <RoomTitleWrapper>
    <GlitchText text={title}/>
  </RoomTitleWrapper>
)

export default RoomTitle
