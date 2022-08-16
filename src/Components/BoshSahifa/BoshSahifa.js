import React from 'react';
import { useEffect } from 'react';
import Img1 from '../../imgs/yangi.jpg';
import Img2 from '../../imgs/yangui 2.jpg';
import Img3 from '../../imgs/slider3.jpg';
import bizhaqimizdaImg from '../../imgs/bizhaqimizda img1.png';
import impuls1Img from '../../imgs/111111.jpg';
import impuls2Img from '../../imgs/Medical-Students.jpg';
import impuls3Img from '../../imgs/Which-Type-of-Investment-Has-the-Highest-Risk-900x531.png';

import logoImg from '../../imgs/logo.png';
import './BoshSahifa.css'
import { Link } from 'react-router-dom';


import { motion } from 'framer-motion';

import { useTranslation } from "react-i18next";


const TextAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 , duration: 0.7},
  }),
};



function BoshSahifa() {

  const { t } = useTranslation();
    
    useEffect(() => {
        let imgs = document.querySelectorAll('.img');

        let currSlide = 0;

        function slider(el) {
            imgs.forEach(el => el.classList.remove('active'));
            imgs[el].classList.add('active');
        }

        setInterval(() => {
            currSlide++
            if (currSlide === imgs.length) {
                currSlide = 0
            }
            slider(currSlide);
        }, 6000);
    }, []);


    function upBtnF() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }



    function accordion(e) {
        document.querySelectorAll('.accordion')
        .forEach(el => el.classList.remove('active'));
        if (e.target.tagName === 'H1') {
            e.target.parentElement.parentElement.classList.add("active");
        }
        e.target.parentElement.classList.add('active');
    }

  

    return (
      <>
        <motion.header
          id="boshSahifa"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <div className="img imgs-0 active">
            <img src={Img1} alt=""></img>
            <h4>{t("img_h4_1")}</h4>
            <h1>{t("img_h1_1")}</h1>
          </div>
          <div className="img imgs-1">
            <img src={Img2} alt=""></img>
            <h4>{t("img_h4_2")}</h4>
            <h1>{t("img_h1_2")}</h1>
          </div>
          <div className="img imgs-2">
            <img src={Img3} alt=""></img>
            <h4>{t("img_h4_3")}</h4>
            <h1>{t("img_h1_3")}</h1>
          </div>
        </motion.header>

        <motion.div
          className="biz-haqimizda reveal section"
          id="bizHaqimizda"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <div className="bizhaqimizda-text">
            <motion.h1
              className="reveal-text"
              custom={0}
              variants={TextAnimation}
            >
              {t("biz_haqimzida_h1")}
            </motion.h1>
            <motion.p
              custom={1}
              variants={TextAnimation}
              className="reveal-text"
            >
              {t("biz_haqimizda_p")}
            </motion.p>
            <Link onClick={upBtnF} to="/bizhaqimizda" className="btn">
              {t("biz_haqimizda_btn")}
            </Link>
          </div>
          <motion.div
            className="bizhaqimzida-img"
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
          >
            <img src={bizhaqimizdaImg} alt="" />
          </motion.div>
        </motion.div>

        <motion.div className="impuls">
          <motion.div
            className="impuls-box"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="img-impuls-box">
              <div className="img-logo">
                <img src={logoImg} alt="" />
              </div>
              <img src={impuls1Img} alt="" />
            </div>
            <h1>{t("impuls_box_h1_1")}</h1>
            <p>{t("impuls_box_p_1")}</p>
          </motion.div>

          <motion.div
            className="impuls-box"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="img-impuls-box">
              <div className="img-logo">
                <img src={logoImg} alt="" />
              </div>
              <img src={impuls2Img} alt="" />
            </div>
            <h1>{t("impuls_box_h1_2")}</h1>
            <p>{t("impuls_box_p_2")}</p>
          </motion.div>

          <motion.div
            className="impuls-box"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="img-impuls-box">
              <div className="img-logo">
                <img src={logoImg} alt="" />
              </div>
              <img src={impuls3Img} alt="" />
            </div>
            <h1>{t("impuls_box_h1_3")}</h1>
            <p>{t("impuls_box_p_3")}</p>
          </motion.div>
        </motion.div>

        <div className="accordion-section">
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="first"
          >
            - {t("ko'p_beriladighan_savollar")} -
          </motion.h1>
          <div className="accordion-box">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="left-menu"
            >
              <p>{t("accordion_section_p")}</p>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="right-menu"
              onClick={accordion}
            >
              <div className="accord-box">
                <div className="accordion active">
                  <div className="savol-div">
                    <h1>{t("savol_1")}</h1>
                    <div className="plus">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="preview ">
                    <p>{t("javob_1")}</p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>{t("savol_2")}</h1>
                    <div className="plus">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="preview">
                    <p>{t("javob_2")}</p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>{t("savol_3")}</h1>
                    <div className="plus">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="preview">
                    <p>{t("javob_3")}</p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>{t("savol_4")}</h1>
                    <div className="plus">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="preview">
                    <p>{t("javob_4")}</p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>{t("savol_5")}</h1>
                    <div className="plus">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="preview">
                    <p>
                      {t("javob_5")}
                      <br />
                      <span>{t('javob_5_span_1')}</span>
                      <br />
                      <span>{t("javob_5_span_2")}</span>
                      <br />
                      {t("javob_5_span_3")}
                    </p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>{t("savol_6")}</h1>
                    <div className="plus">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="preview">
                    <p>{t("javob_6")}</p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>{t("savol_7")}</h1>
                    <div className="plus">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="preview">
                    <p>{t("javob_7")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </>
    );
}

export default BoshSahifa;