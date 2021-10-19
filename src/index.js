import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Translation
import i18next from 'i18next'
import { initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'


i18next

  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    
    supportedLngs: ['en', 'fr'],
    fallbackLng:"en",
    detection: {
      order: ['cookie','path', 'htmlTag','subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/portfolio/assests/locales/{{lng}}/translation.json',
    },


 
   
    react: { useSuspense: false },
   
  })




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

