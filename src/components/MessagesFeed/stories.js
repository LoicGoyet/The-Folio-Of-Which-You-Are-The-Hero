import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MessagesFeed from '.';

const stories = storiesOf('MessagesFeed', module);

stories.add('default', () => (
  <MessagesFeed
    onEndReading={action('onEndReading')}
    message={{
      id: 0,
      content: 'hello world !',
      read: false,
      createdAt: 1538918765904,
    }}
  />
));

export default stories;
