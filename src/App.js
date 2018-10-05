import React from 'react';
import { Provider } from 'react-redux';

import Rooms from './containers/Rooms';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Rooms />
  </Provider>
);

export default App;
