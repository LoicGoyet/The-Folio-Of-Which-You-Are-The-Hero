import React from 'react';
import { Provider } from 'react-redux';

import Rooms from './containers/Rooms';
import MessagesFeed from './containers/MessagesFeed';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div>
      <Rooms />
      <MessagesFeed />
    </div>
  </Provider>
);

export default App;
