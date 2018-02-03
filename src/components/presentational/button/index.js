import React from 'react'
import { createComponent } from 'react-fela'
import { button } from './style'

const Button = createComponent(button, 'button')

export default ({children, ...props}) => (
    <Button {...props}>
        {children}
    </Button>
)
