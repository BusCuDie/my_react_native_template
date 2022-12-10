import {call, takeLatest, put} from 'redux-saga/effects';
import JobActions, {JobTypes} from './action';
import get from 'lodash/get';

import * as API from './service';

export function* getHotJob(action) {
  try {
    const response = yield call(API.getHotJob);
    if (response.status) {
      yield put(JobActions.getHotJobSuccess(get(response, 'data')));
    }
  } catch (error) {
    console.log('ERROR', error.message);
  }
}

const mapAuthSagas = [takeLatest(JobTypes.GET_HOT_JOB, getHotJob)];
export default mapAuthSagas;
