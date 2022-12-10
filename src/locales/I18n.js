import I18n from 'react-native-i18n';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

I18n.translations = {
  en: require('./languages/en.json'),
  vi: require('./languages/vi.json'),
};

let languagesCode = I18n.locale.substring(0, 2);

switch (languagesCode) {
  case 'en':
    I18n.translations.uk = require('./languages/en.json');
    break;
  case 'vi':
    I18n.translations.uk = require('./languages/vi.json');
    break;
}

export const changeLanguage = locale => {
  I18n.locale = locale;
};

export default I18n;
