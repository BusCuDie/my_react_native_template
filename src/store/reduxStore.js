import {persistReducer, persistStore} from 'redux-persist';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import rootSagas from './rootSagas';
import {reducer as auth} from 'store/auth/reducer';
import {reducer as user} from 'store/user/reducer';
import {reducer as categories} from 'store/categories/reducer';
import {reducer as job} from 'store/job/reducer';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';

let middleware = [];
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'categories', 'job'],
  blacklist: [],
  stateReconciler: false,
};
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const rootReducer = combineReducers({
  auth,
  user,
  categories,
  job,
});

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(...middleware),
);

sagaMiddleware.run(rootSagas);

export const persistedStore = persistStore(store);

export default store;
