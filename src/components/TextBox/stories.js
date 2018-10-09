import React from 'react';
import { storiesOf } from '@storybook/react';

import TextBox from '.';
import GlitchText from '../GlitchText';

const stories = storiesOf('TextBox', module);

stories.add('default', () => (
  <TextBox>
    Lorem, ipsum dolor sit amet <GlitchText>consectetur</GlitchText> adipisicing elit.
  </TextBox>
));

export default stories;
