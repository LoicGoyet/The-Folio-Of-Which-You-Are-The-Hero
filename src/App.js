import React from 'react';
import { Provider } from 'react-redux';

import Rooms from './containers/Rooms';
import store from './store';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Rooms />
            </Provider>
        );
    }
}