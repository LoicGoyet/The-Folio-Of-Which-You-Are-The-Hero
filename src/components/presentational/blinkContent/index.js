import React from 'react'
import { createComponent } from 'react-fela'
import { blinkContent } from './style'

const BlinkContent = createComponent(blinkContent)

export default ({children, className = ''}) => (
    <BlinkContent className={className}>
        {children}
    </BlinkContent>
)
