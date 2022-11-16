import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { IoIosArrowUp } from 'react-icons/io';
import { FaPhone , FaTelegram, FaHotel} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { GrInstagram, GoLocation, GrLocation } from "react-icons/gr";

import MapImg from '../../imgs/GoogleMapTA.jpg'
import { useTranslation } from "react-i18next";

function Footer() {

    const { t } = useTranslation();

    function upBtnF() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }

    return (
      <>
        <footer className="reveal">
          <div className="footer-box">
            <div className="contact-info">
              <h1>{t("footer_h1")}</h1>
              <Link to="/">{t("link_1")}</Link>
              <a href="https://impulsmedical7@gmail.com">
                <MdEmail />
                impulsedu1@gmail.com
              </a>
              <a href="https://t.me/impulsmi_uz">
                <FaTelegram />
                Telegram
              </a>
              <a href="https://instagram.com/impulsmi_uz?igshid=YmMyMTA2M2Y=">
                <GrInstagram />
                Instagram
              </a>
              <a href="Tel:+998692395015" className="phones">
                <FaPhone />
                <p>+998 69 239 50 15</p>
              </a>
            </div>
            <div className="sections-info">
              <h1>{t("sahifalarimiz")}</h1>
              <Link onClick={upBtnF} to="/">
                {t("bosh_sahifa")}
              </Link>
              <Link onClick={upBtnF} to="/bizhaqimizda">
                {t("biz_haqimizda")}
              </Link>
              <Link onClick={upBtnF} to="/kutibxona">
                {t("kutibxona")}
              </Link>
              <Link onClick={upBtnF} to="/aloqa">
                {t("aloqa")}
              </Link>
            </div>
            <a
              href="https://maps.google.com/maps?q=41.002598,71.684406&ll=41.002598,71.684406&z=16  "
              target="_blank"
              className="map"
            >
              <img src={MapImg} alt="" />
            </a>
          </div>

          <div className="footer-copyryter">
            <div className="btn-up" onClick={upBtnF}>
              <IoIosArrowUp />
            </div>
          </div>
        </footer>
      </>
    );
}

export default Footer;