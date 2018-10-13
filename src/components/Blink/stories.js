import React from 'react';
import { storiesOf } from '@storybook/react';

import Blink from '.';

const stories = storiesOf('Blink', module);

stories.add('default', () => <Blink>hello world !</Blink>);

export default stories;
