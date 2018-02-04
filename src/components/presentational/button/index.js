import React from 'react'
import { createComponentWithProxy } from 'react-fela'
import { button } from './style'

const Button = createComponentWithProxy(button, 'button')

export default ({children, ...props}) => (
    <Button {...props}>
        {children}
    </Button>
)
