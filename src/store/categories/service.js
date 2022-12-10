import {GET, POST} from 'store/api';

export const getCategories = () => {
  const path = 'categories/';
  return GET(path, {});
};
