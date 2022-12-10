import I18n from './I18n';

const translateOrFallBack = (initialMsg, options) => {
  if (typeof initialMsg !== 'string') {
    __DEV__ &&
      console.log(
        'I18n: You must give a string to translate instead of ',
        typeof initialMsg,
      );
    return '';
  }
  return I18n.t(initialMsg, options);
};

export default {
  ...I18n,
  t: translateOrFallBack,
};
