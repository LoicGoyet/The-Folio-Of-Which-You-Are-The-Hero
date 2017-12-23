import { takeEvery, put, select } from 'redux-saga/effects'

export const INVENTORY_FOLD_OPEN = 'INVENTORY_FOLD_OPEN'
function* inventoryFoldOpen() {
  yield put({
    type: INVENTORY_FOLD_OPEN
  })
}

export const INVENTORY_ITEM_EMPHASIS_SET = 'INVENTORY_ITEM_EMPHASIS_SET'
function* inventoryItemEmphasisSet({ item }) {
  yield put({
    type: INVENTORY_ITEM_EMPHASIS_SET,
    item
  })
}

export const INVENTORY_ITEM_EMPHASIS_UNSET = 'INVENTORY_ITEM_EMPHASIS_UNSET'
function* inventoryItemEmphasisUnset() {
  const { folded, emphasis } = yield select(state => state.inventory)

  // condition avoid to dispatch action on every inventory toggle
  if (folded && emphasis) {
    yield put({
      type: INVENTORY_ITEM_EMPHASIS_UNSET,
    })
  }
}

export default function* inventoryWatcher() {
  yield takeEvery('INVENTORY_ITEM_ADD', inventoryFoldOpen)
  yield takeEvery('INVENTORY_ITEM_ADD', inventoryItemEmphasisSet)
  yield takeEvery('INVENTORY_FOLD_TOGGLE', inventoryItemEmphasisUnset)
}
