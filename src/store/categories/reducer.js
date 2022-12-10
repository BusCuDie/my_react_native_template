import {createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {CategoriesTypes} from './action';
import {REHYDRATE} from 'redux-persist/es/constants';

export const INITIAL_STATE = Immutable({
  listCategories: [],
});

const getCategoriesSuccess = (state, action) => {
  const {categories} = action;
  return state.merge({
    listCategories: categories,
  });
};
const restore = (state, action) => {
  const {payload} = action;
  const previousState =
    payload && payload.categories
      ? {
          ...payload.categories,
        }
      : {};
  return INITIAL_STATE.merge(previousState);
};

export const reducer = createReducer(INITIAL_STATE, {
  [CategoriesTypes.GET_CATEGORIES_SUCCESS]: getCategoriesSuccess,
  [REHYDRATE]: restore,
});
