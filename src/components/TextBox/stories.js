import React from 'react';
import { storiesOf } from '@storybook/react';

import NarrativeBox from '.';
import GlitchText from '../GlitchText';

const stories = storiesOf('TextBox', module);

stories.add('default', () => (
  <NarrativeBox>
    Lorem, ipsum dolor sit amet <GlitchText>consectetur</GlitchText> adipisicing elit.
  </NarrativeBox>
));

export default stories;
