import i18n from 'i18next';
import i18nBackend from "i18next-http-backend";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';

i18n.use(detector)
    .use(i18nBackend)
    .use(initReactI18next)
    .init({
        lng: `${window.localStorage.getItem("i18nextLng") || 'es'}`,  
        fallbackLng: 'es',
        interpolation:{
            escapeValue: false
        },
        backend: {
            loadPath: 'http://localhost:5173/i18n/{{lng}}.json',
        }
    });

export default i18n;