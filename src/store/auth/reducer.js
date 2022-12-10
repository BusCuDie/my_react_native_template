import {createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {AuthTypes} from './action';

export const INITIAL_STATE = Immutable({
  phone: '',
});

export const reducer = createReducer(INITIAL_STATE, {});
