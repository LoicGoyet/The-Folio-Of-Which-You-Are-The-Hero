import { all } from 'redux-saga/effects';

import itemsSaga from './items';
import roomsSaga from './rooms';

export default function* rootSaga() {
  yield all([itemsSaga(), roomsSaga()]);
}
