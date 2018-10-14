import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Screen from '../Screen';
import Menu from '.';

const stories = storiesOf('Menu', module);

stories.add('without items', () => (
  <Screen>
    <Menu
      items={{
        byId: {},
        allIds: [],
      }}
      onItemClick={action('onItemClick')}
    />
  </Screen>
));

stories.add('with items', () => (
  <Screen>
    <Menu
      onItemClick={action('onItemClick')}
      items={{
        byId: {
          0: {
            id: 0,
            title: 'Clé',
            inInventory: true,
            messages: ['This keys looks very old !', 'This key might be usefull for the kitchen'],
          },
          1: {
            id: 1,
            title: 'Trowel',
            inInventory: true,
            messages: ['Seems pretty useless...'],
          },
        },
        allIds: [0, 1],
      }}
    />
  </Screen>
));

export default stories;
