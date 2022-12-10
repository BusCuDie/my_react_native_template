import isEmpty from 'lodash/isEmpty';
import size from 'lodash/size';

export const transferName = fullName => {
  if (isEmpty(fullName)) {
    return 'Unknown';
  }
  const splitName = fullName.split(' ');
  if (size(splitName) === 1) {
    return splitName;
  }
  return splitName[size(splitName) - 2] + ' ' + splitName[size(splitName) - 1];
};
