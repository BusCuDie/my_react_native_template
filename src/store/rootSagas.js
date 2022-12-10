import authSagas from 'store/auth/saga';
import userSagas from 'store/user/saga';
import categoriesSagas from 'store/categories/saga';
import jobSagas from 'store/job/saga';
import {all} from 'redux-saga/effects';
export default function* rootSagas() {
  yield all([...authSagas, ...userSagas, ...categoriesSagas, ...jobSagas]);
}
