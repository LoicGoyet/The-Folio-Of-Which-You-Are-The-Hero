import { combineReducers } from 'redux'

import { RESET_STATE } from '../actions/root'

import house from './house'
import inventory from './inventory'
import translation from './translation'

const appReducer = combineReducers({
  house,
  inventory,
  translation,
})

const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
