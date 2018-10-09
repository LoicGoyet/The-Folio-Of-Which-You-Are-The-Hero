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
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quibusdam voluptates aperiam voluptas, itaque fugit ea harum deserunt atque error minima sapiente delectus fugiat nemo cum nisi natus officia voluptatem?',
      read: false,
      createdAt: 1538918765904,
    }}
  />
));

export default stories;
