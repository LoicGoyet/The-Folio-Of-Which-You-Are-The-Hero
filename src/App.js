import React, { Component } from 'react';
import './App.css';
import HeroGame from './components/containers/heroGame'
import { createRenderer } from 'fela'
import { Provider } from 'react-fela'


class App extends Component {
  render() {
    const renderer = createRenderer()

    return (
      <Provider renderer={renderer}>
        <div className="app-container">
          <HeroGame/>
        </div>
      </Provider>
    )
  }
}

export default App;
