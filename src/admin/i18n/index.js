import i18n from 'i18next';
import React from 'react';
import {initReactI18next} from 'react-i18next';
import resources from './dictionaries';
import store from "../../store";

// const defaultLang = store.getState().lang.code;

export default function initTranslation(defaultLang) {
    i18n.use(initReactI18next).init({
        resources,
        initImmediate: false,
        lng: defaultLang
    });
    return i18n;
}

// export function changeLang(langId,) {
//     i18n.changeLanguage(langs.find((l) => {
//         return l.id === langId
//     }).code);
// }

