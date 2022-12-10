import {createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {JobTypes} from './action';
import {REHYDRATE} from 'redux-persist/es/constants';

export const INITIAL_STATE = Immutable({
  hotJobs: [],
});

const getHotJobSuccess = (state, action) => {
  const {jobs} = action;
  return state.merge({
    hotJobs: jobs,
  });
};
const restore = (state, action) => {
  const {payload} = action;
  const previousState =
    payload && payload.job
      ? {
          ...payload.job,
        }
      : {};
  return INITIAL_STATE.merge(previousState);
};

export const reducer = createReducer(INITIAL_STATE, {
  [JobTypes.GET_HOT_JOB_SUCCESS]: getHotJobSuccess,
  [REHYDRATE]: restore,
});
