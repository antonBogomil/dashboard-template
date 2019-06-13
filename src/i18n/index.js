import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import resources from './dictionaries';

i18n.use(initReactI18next).init({
    resources,
    initImmediate: false,
    lng: 'en'
});
export default i18n;

