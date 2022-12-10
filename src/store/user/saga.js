import {call, put, takeLatest} from 'redux-saga/effects';
import UserActions, {UserTypes} from './action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from 'constants/Storage';
import get from 'lodash/get';
import * as API from './service';

export function* createUser(action) {
  const {user, onSuccess, onFailed} = action;
  try {
    const response = yield call(API.createUser, user);
    if (response.status) {
      AsyncStorage.setItem(Storage.ACCESS_TOKEN, get(response, 'token'));
      yield put(UserActions.createUserSuccess(response));
      onSuccess() && onSuccess(response);
    } else {
      onFailed && onFailed(response);
    }
  } catch (error) {
    onFailed && onFailed(error);
  }
}

export function* updateUser(action) {
  const {userId, data, onSuccess, onFailed} = action;
  try {
    const response = yield call(API.updateUser, userId, data);
    if (response.status) {
      yield put(UserActions.updateUserSuccess(get(response, 'user')));
      onSuccess && onSuccess(response);
    } else {
      onFailed && onFailed(response);
    }
  } catch (error) {
    onFailed && onFailed(error);
  }
}

export function* login(action) {
  const {email, password, onSuccess, onFailed} = action;
  try {
    const response = yield call(API.login, email, password);

    if (response.status) {
      AsyncStorage.setItem(Storage.ACCESS_TOKEN, get(response, 'token'));
      yield put(UserActions.loginSuccess(response));
      onSuccess && onSuccess(response);
    } else {
      onFailed && onFailed(response);
    }
  } catch (error) {
    onFailed && onFailed(error);
  }
}

export function* logout(action) {
  const {onSuccess} = action;
  try {
    AsyncStorage.removeItem(Storage.ACCESS_TOKEN);
    yield put(UserActions.logoutSuccess());
    onSuccess && onSuccess();
  } catch (error) {
    console.log('ERROR', error);
  }
}

const mapAuthSagas = [
  takeLatest(UserTypes.CREATE_USER, createUser),
  takeLatest(UserTypes.UPDATE_USER, updateUser),
  takeLatest(UserTypes.LOGIN, login),
  takeLatest(UserTypes.LOGOUT, logout),
];
export default mapAuthSagas;
