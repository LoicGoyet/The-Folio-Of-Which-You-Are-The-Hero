import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';


import Button from './index'

const buttonStories = () => {
  return storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('with text', () => {
      return (
        <Button onClick={action('clicked')}>
          { text('Label', 'Hello World !') }
        </Button>
      )
    })
}

export default buttonStories