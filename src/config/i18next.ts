import dayjs from 'dayjs';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE_KEY, DEFAULT_NAMESPACE } from '@/constants/i18n';
import locales from '@/locales';
import { isBrowser } from '@/utils/ssr';

dayjs.locale(DEFAULT_LANGUAGE_KEY);

i18n.use(initReactI18next).init({
  defaultNS: DEFAULT_NAMESPACE,
  ns: Object.keys(locales[DEFAULT_LANGUAGE_KEY]),
  resources: locales,
  lng: DEFAULT_LANGUAGE_KEY,
  fallbackLng: DEFAULT_LANGUAGE_KEY,
  returnNull: false,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

i18n.on('languageChanged', (langKey) => {
  const language = AVAILABLE_LANGUAGES.find(({ key }) => key === langKey);
  dayjs.locale(langKey);
  if (isBrowser) {
    document.documentElement.lang = langKey;
    document.documentElement.dir = language?.dir ?? 'ltr';
    document.documentElement.style.fontSize = `${(language?.fontScale ?? 1) * 100}%`;
  }
});

export default i18n;
