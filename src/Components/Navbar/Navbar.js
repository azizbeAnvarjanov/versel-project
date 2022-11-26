import { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'




import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const languages = [
  {
    language: 'uz',
    innerHtml: 'Uz',
    id: '1'
  },
  {
    language: 'ru',
    innerHtml: 'Ru',
    id: '2'
  },
  {
    language: 'en',
    innerHtml: 'En',
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

    useEffect(() => {
      document.querySelectorAll(".lng")[0].classList.add('active');
    }, []);

    function changeLng(e) {
      document.querySelectorAll('.lng')
      .forEach(el => el.classList.remove('active'));
      e.target.classList.add('active');
    }

    return (
      <>
        <div className={navbarClass ? "navbar active" : "navbar"}>
          <div className={navbarClass ? "nav-top-info active" : "nav-top-info"}>
            <span className="name-univer">{t("name_univer")}</span>
            <span className="phone-univer">
              <a href="Tel:+998692395015">+998 69 239 50 15</a>
            </span>
            <span className="email-univer">
              <p>impulsedu1@gmail.com</p>
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
                <Link onClick={changePages} to="/usmle">
                  {t("usmle")}
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
                    {languages.map((lng) => (
                      <span
                        className="lng"
                        onClick={(e) => {
                          i18next.changeLanguage(lng.language);
                          changeClass();
                          changeLng(e);
                        }}
                        key={lng.id}
                      >
                        {lng.innerHtml}
                      </span>
                    ))}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}

export default Navbar;