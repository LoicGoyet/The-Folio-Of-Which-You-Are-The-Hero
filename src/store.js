import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import throttle from 'lodash/throttle'

import rootReducer from './reducers'
import middlewares from './actions/middlewares'
import { loadState, saveState } from './localStorage'

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)

store.subscribe(throttle(() => {
  saveState(store.getState())
}), 1000)

export default store
