import React from 'react'
import Type from '../type'
import RoomIllustration from '../roomIllustration'
import RoomTitle from '../roomTitle'
import RoomHeader from '../roomHeader'
import { createComponent } from 'react-fela'
import { room } from './style'

const RoomWrapper = createComponent(room);

const Room = ({visited, children, resetState, illustration, title, header}) => {
    return (
        <RoomWrapper>
            {header && <RoomHeader resetState={resetState}/>}

            <Type visited={visited} title={title}>
                {illustration && <RoomIllustration {...illustration}/>}
                {title && <RoomTitle title={title}/>}
                {children}
            </Type>
        </RoomWrapper>
    )
}

Room.defaultProps = {
    illustration: false,
    title: false,
    header: true,
}

export default Room
