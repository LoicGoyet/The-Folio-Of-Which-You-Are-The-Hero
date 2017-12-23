import { all } from 'redux-saga/effects'
import houseWatcher from './house'
import inventoryWatcher from './inventory'

export default function* rootSaga() {
  yield all([
    inventoryWatcher(),
    houseWatcher(),
  ])
}
