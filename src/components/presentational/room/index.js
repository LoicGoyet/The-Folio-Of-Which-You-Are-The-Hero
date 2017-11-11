import React from 'react'
import Type from '../type'
import RoomIllustration from '../roomIllustration'
import RoomTitle from '../roomTitle'
import RoomHeader from '../roomHeader'
import './style.css'

const Room = ({ visited, children, illustration = false, title = false, header = true}) => (
  <section className="room">
    { header && <RoomHeader/> }
    <Type visited={visited} title={title}>
      { illustration && <RoomIllustration {...illustration}/> }
      { title && <RoomTitle title={title}/> }
      {children}
    </Type>
  </section>
)

export default Room