import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import  LanguageDetector from 'i18next-browser-languagedetector'
import httpApi from 'i18next-http-backend'

import translationEN from './locale/En.json'
import translationHB from './locale/Hb.json'

const resources = {
  en: {
    translation: translationEN
  },
  hb: {
    translation:translationHB
  }
};

i18n
.use(initReactI18next) 
.use(LanguageDetector)
.use(httpApi)
  
  .init({
    supportedLngs:['en','ar','hb'],
    resources,
    fallbackLng:'en',
    detection:{
      order:['cookie','htmlTag','localStorage','path','subdomain'],
      caches:['cookie']
    },
    interpolation: {
      escapeValue: false 
    },
    react:{
        useSuspense:false
    }
  });

  export default i18n;
