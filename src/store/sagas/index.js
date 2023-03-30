import { all } from 'redux-saga/effects';

import imageSaga from './characterSaga';

export default function* rootSaga() {
  yield all([imageSaga()]);
}
