import {createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {UserTypes} from './action';
import {REHYDRATE} from 'redux-persist/es/constants';
import get from 'lodash/get';

export const INITIAL_STATE = Immutable({
  token: '',
  info: {},
  recentlySearch: [],
});

const createUserSuccess = (state, action) => {
  const {response} = action;
  return state.merge({
    token: get(response, 'token'),
    info: get(response, 'user'),
  });
};

const updateUserSuccess = (state, action) => {
  const {user} = action;
  return state.merge({
    info: user,
  });
};

const loginSuccess = (state, action) => {
  const {response} = action;
  return state.merge({
    token: get(response, 'token'),
    info: get(response, 'user'),
  });
};

const logoutSuccess = (state, action) => {
  return state.merge({
    token: '',
    info: {},
    recentlySearch: [],
  });
};

const recentlySearch = (state, action) => {
  const {search} = action;
  return state.merge({
    recentlySearch: search ? search : [],
  });
};

const restore = (state, action) => {
  const {payload} = action;
  const previousStore =
    payload && payload.user
      ? {
          ...payload.user,
        }
      : {};
  return INITIAL_STATE.merge(previousStore);
};

export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.CREATE_USER_SUCCESS]: createUserSuccess,
  [UserTypes.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [UserTypes.LOGOUT_SUCCESS]: logoutSuccess,
  [UserTypes.LOGIN_SUCCESS]: loginSuccess,
  [UserTypes.RECENTLY_SEARCH]: recentlySearch,
  [REHYDRATE]: restore,
});
