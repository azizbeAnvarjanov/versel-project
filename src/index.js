import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["uz", "en", "ru"],
    fallbackLng: "uz",
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "subdomain", "path"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

