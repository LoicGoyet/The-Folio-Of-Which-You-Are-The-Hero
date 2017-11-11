import { combineReducers } from 'redux'
import house from './house'
import inventory from './inventory'
import translation from './translation'

const rootReducer = combineReducers({
  house,
  inventory,
  translation,
})

export default rootReducer