import React from 'react'
import Type from '../type'
import RoomIllustration from '../roomIllustration'
import RoomTitle from '../roomTitle'
import RoomHeader from '../roomHeader'
import './style.css'

const Room = ({visited, children, resetState, illustration, title, header}) => (
  <section className="room">
    {header && <RoomHeader resetState={resetState}/>}

    <Type visited={visited} title={title}>
      {illustration && <RoomIllustration {...illustration}/>}
      {title && <RoomTitle title={title}/>}
      {children}
    </Type>
  </section>
)

Room.defaultProps = {
  illustration: false,
  title: false,
  header: true,
}

export default Room
