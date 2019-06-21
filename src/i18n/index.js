import i18n from 'i18next';
import React from 'react';
import {initReactI18next} from 'react-i18next';
import resources from './dictionaries';
import langs from "../settings/langs";
const defaultLang = langs[0].code;
i18n.use(initReactI18next).init({
    resources,
    initImmediate: false,
    lng: defaultLang
});
export default i18n;


// export function changeLang(langId,) {
//     i18n.changeLanguage(langs.find((l) => {
//         return l.id === langId
//     }).code);
// }

