import {createActions} from 'reduxsauce';
const {Types, Creators} = createActions({
  checkEmail: ['email', 'callback'],
  verifyEmail: ['email', 'callback'],
});

export const AuthTypes = Types;
export default Creators;
