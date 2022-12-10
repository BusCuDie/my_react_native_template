import {createActions} from 'reduxsauce';
const {Types, Creators} = createActions({
  getHotJob: [],
  getHotJobSuccess: ['jobs'],
});

export const JobTypes = Types;
export default Creators;
