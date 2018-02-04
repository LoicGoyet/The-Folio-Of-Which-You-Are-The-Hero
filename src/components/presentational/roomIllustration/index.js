import React from 'react'
import { createComponent } from 'react-fela'
import { roomIllustration } from './style'

const RoomIllustrationWrapper = createComponent(roomIllustration)

const RoomIllustration = ({src, alt}) => (
  <RoomIllustrationWrapper>
    <img src={src} alt={alt}/>
  </RoomIllustrationWrapper>
)

export default RoomIllustration
