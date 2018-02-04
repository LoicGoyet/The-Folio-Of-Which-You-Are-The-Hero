import React from 'react'
import { createComponent } from 'react-fela'
import { buttonGroup } from './style'

const ButtonGroup = createComponent(buttonGroup)

export default ({children}) => (
    <ButtonGroup>
        {children}
    </ButtonGroup>
)
