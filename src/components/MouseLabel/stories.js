import React from 'react';
import { storiesOf } from '@storybook/react';

import MouseLabel from '.';

const stories = storiesOf('MouseLabel', module);

stories.add('default', () => (
  <svg width="100%" height="100%" viewBox="0 0 960 720">
    <MouseLabel title="test 1">
      <path d="M 326.762 16.925 L 418.428 175.696 L 235.095 175.696 L 326.762 16.925 Z" fill="red" />
    </MouseLabel>
  </svg>
));

export default stories;
