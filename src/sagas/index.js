import { all } from 'redux-saga/effects'
import { inventoryWatcher } from './inventory'

export default function* rootSaga() {
  yield all([
    inventoryWatcher(),
  ])
}
