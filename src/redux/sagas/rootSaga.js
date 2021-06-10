import {takeLatest} from '@redux-saga/core/effects';
import {GET_USER} from '../actionTypes';
import {handleGetUser} from './handlers';

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
