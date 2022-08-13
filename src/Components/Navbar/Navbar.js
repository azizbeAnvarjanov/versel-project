import { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'


function Navbar() {

    const [nav, setNav] = useState(false);
    const [navbarClass, setNavbarClass] = useState(false);

    function changeClass() {
        nav ? setNav(false) : setNav(true);
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

    return (
      <>
        <div className={navbarClass ? "navbar active" : "navbar"}>
          <div className={navbarClass ? "nav-top-info active" : "nav-top-info"}>
            <span className="name-univer"> Impuls Tibbiyot Institut</span>
            <span className="phone-univer">+ 69 239 50 15</span>
            <span className="email-univer">
              <p>info@company.com</p>
            </span>
          </div>
          <div className="nav">
            <div className="navbar-brand">
              <Link onClick={upBtnF} to="/">
                <h1>Impuls Tibbiyot Institut</h1>
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
                  Bosh Sahifa
                </Link>
              </li>
              <li>
                <Link onClick={changePages} to="/bizhaqimizda">
                  Biz Haqimizda
                </Link>
              </li>
              <li>
                <Link onClick={changePages} to="/kutibxona">
                  Kutibxona
                </Link>
              </li>
              <li>
                <Link onClick={changePages} to="/aloqa">
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}

export default Navbar;