import React from 'react';
import { storiesOf } from '@storybook/react';

import Panel from '.';

const stories = storiesOf('Panel', module);

stories.add('default', () => (
  <Panel>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam libero et sit eos neque debitis, necessitatibus
    nihil quod! Excepturi error id voluptatibus quis libero explicabo inventore quaerat minima eum esse.
  </Panel>
));

export default stories;
