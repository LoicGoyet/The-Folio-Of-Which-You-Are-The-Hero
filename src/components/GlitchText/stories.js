import React from 'react';
import { storiesOf } from '@storybook/react';

import GlitchText from '.';

const stories = storiesOf('GlitchText', module);

stories.add('default', () => <GlitchText>Haunted Mansion</GlitchText>);

export default stories;
