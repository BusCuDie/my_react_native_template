import {createActions} from 'reduxsauce';
const {Types, Creators} = createActions({
  getCategories: [],
  getCategoriesSuccess: ['categories'],
});

export const CategoriesTypes = Types;
export default Creators;
