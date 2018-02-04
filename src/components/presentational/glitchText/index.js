import React from 'react'
import { createComponent } from 'react-fela'
import { glitchText } from './style'

const GlitchText = createComponent(glitchText, 'span')

export default props => (
    <GlitchText {...props}>
        {props.text}
    </GlitchText>
)
