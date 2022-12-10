import {call, takeLatest, put} from 'redux-saga/effects';
import CategoriesActions, {CategoriesTypes} from './action';
import get from 'lodash/get';

import * as API from './service';

export function* getCategories(action) {
  try {
    const response = yield call(API.getCategories);
    if (response.status) {
      yield put(CategoriesActions.getCategoriesSuccess(get(response, 'data')));
    }
  } catch (error) {
    console.log('ERROR', error.message);
  }
}

const mapAuthSagas = [
  takeLatest(CategoriesTypes.GET_CATEGORIES, getCategories),
];
export default mapAuthSagas;
