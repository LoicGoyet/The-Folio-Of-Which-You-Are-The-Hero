import React, { Component } from 'react';
import HeroGame from './components/containers/heroGame'
import { createRenderer } from 'fela'
import { Provider, createComponent } from 'react-fela'
import embedded from 'fela-plugin-embedded'
import globalStyle, { appContainer } from './style'


const AppContainer = createComponent(appContainer)

class App extends Component {
  render() {
    const renderer = createRenderer({
        plugins: [ embedded() ]
    })

    renderer.renderStatic(globalStyle)

    return (
      <Provider renderer={renderer}>
        <AppContainer>
          <HeroGame/>
        </AppContainer>
      </Provider>
    )
  }
}

export default App;
