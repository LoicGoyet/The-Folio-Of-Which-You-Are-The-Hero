import React from 'react';
import { Provider } from 'react-redux';

import Rooms from './containers/Rooms';
import MessagesFeed from './containers/MessagesFeed';
import Screen from './containers/Screen';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Screen>
      <Rooms />
      <MessagesFeed />
    </Screen>
  </Provider>
);

export default App;
