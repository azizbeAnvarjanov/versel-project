import { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

import { GrLanguage } from 'react-icons/gr';


import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const languages = [
  {
    language: 'uz',
    id: '1'
  },
  {
    language: 'ru',
    id: '2'
  },
  {
    language: 'en',
    id: '3'
  },
]




function Navbar() {

  const { t } = useTranslation();

    const [nav, setNav] = useState(false);
    const [navbarClass, setNavbarClass] = useState(false);
    const [lng, setLng] = useState(false);

    function changeClass() {
        nav ? setNav(false) : setNav(true);
    }
    function chnangeLanguages() {
        lng ? setLng(false) : setLng(true);
    }

    function changePages() {
        nav ? setNav(false) : setNav(true);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const location = useLocation();


    window.addEventListener('scroll', () => {
       if (window.scrollY >= 100) {
            setNavbarClass(true);
        }else {
            setNavbarClass(false);
        }
    });

    function upBtnF() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    return (
      <>
        <div className={navbarClass ? "navbar active" : "navbar"}>
          <div className={navbarClass ? "nav-top-info active" : "nav-top-info"}>
            <span className="name-univer">{t("name_univer")}</span>
            <span className="phone-univer">+ 69 239 50 15</span>
            <span className="email-univer">
              <p>info@company.com</p>
            </span>
          </div>
          <div className="nav">
            <div className="navbar-brand">
              <Link onClick={upBtnF} to="/">
                <h1>{t("name_univer")}</h1>
              </Link>
              <div
                className={nav ? "menu active" : "menu"}
                onClick={changeClass}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <ul className={nav ? "navigation active" : "navigation"}>
              <li>
                <Link onClick={changePages} to="/">
                  {t("bosh_sahifa")}
                </Link>
              </li>
              <li>
                <Link onClick={changePages} to="/bizhaqimizda">
                  {t("biz_haqimizda")}
                </Link>
              </li>
              <li>
                <Link onClick={changePages} to="/kutibxona">
                  {t("kutibxona")}
                </Link>
              </li>
              <li>
                <Link onClick={changePages} to="/aloqa">
                  {t("aloqa")}
                </Link>
              </li>
              <li onClick={chnangeLanguages}>
                <span className="lng-box">
                  <GrLanguage />
                  <div className={lng ? "languages active" : "languages"}>
                    {languages.map((lng) => (
                      <span
                        onClick={() => {
                          i18next.changeLanguage(lng.language);
                          changeClass();
                        }}
                        key={lng.id}
                      >
                        {lng.language}
                      </span>
                    ))}
                  </div>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}

export default Navbar;