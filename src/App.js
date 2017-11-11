import React, { Component } from 'react';
import './App.css';
import HeroGame from './components/containers/heroGame'

class App extends Component {
  render() {

    return (
      <div className="app-container">
        <HeroGame/>
      </div>
    )
  }
}

export default App;
