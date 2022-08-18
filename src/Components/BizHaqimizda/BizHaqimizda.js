import React, { useState } from 'react';
import './BizHaqimizda.css';
import { GrClose } from 'react-icons/gr'

import galleryImg1 from '../../imgs/binoni ichi rasmlar/1.jpg'
import galleryImg2 from '../../imgs/binoni ichi rasmlar/2.jpg'
import galleryImg3 from '../../imgs/binoni ichi rasmlar/3.jpg'
import galleryImg4 from '../../imgs/binoni ichi rasmlar/4.jpg'
import galleryImg5 from '../../imgs/binoni ichi rasmlar/5.jpg'
import galleryImg6 from '../../imgs/binoni ichi rasmlar/6.jpg'
import galleryImg7 from '../../imgs/binoni ichi rasmlar/7.jpg'
import galleryImg8 from '../../imgs/binoni ichi rasmlar/8.jpg'

import aboutImg_1 from '../../imgs/about 1.jpg'
import aboutImg_2 from '../../imgs/about 2.jpg'

import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";


function BizHaqimizda() {



  const { t } = useTranslation();

    const [img, setImg] = useState('');

    function gallery(e) {
        let preview = document.querySelector('.img-preview');
        
        
        preview.classList.add('active');
        setImg(e.target.src);
    }
    
    function closePreview() {
        let preview = document.querySelector('.img-preview');
        preview.classList.remove('active');
    }


    return (
      <>
        <motion.div
          className="banner"
          id="home"
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
          <motion.h1
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
          >{t("banner_h1")}</motion.h1>
          <motion.h2
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
          >{t("banner_h2")}</motion.h2>
        </motion.div>

        <div className="header">
          <div className="left-header-menu">
            <motion.div 
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.2 }}
            >
              <h1>{t("header_h1")}</h1>
              <p>
                {t("header_p_1")}
                <br />
                <br />
                {t("header_p_2")}
              </p>
            </motion.div>
            <motion.div 
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.2 }}
              >
              <img src={aboutImg_1} alt="" />
            </motion.div>
          </div>
          <div className="right-header-menu">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.2 }}
            >
              <img src={aboutImg_2} alt="" />
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.2 }}
            >
              <p>
                {t("header_p_3")}
                <br />
                <br />
                {t("header_p_4")}
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
          className="galereya">
          <h1>{t("gallery_h1")}</h1>
          <div className="galereya-box" onClick={gallery}>
            <div className="imgs">
              <img src={galleryImg1} alt="gallery img" />
            </div>
            <div className="imgs">
              <img src={galleryImg2} alt="gallery img" />
            </div>
            <div className="imgs">
              <img src={galleryImg3} alt="gallery img" />
            </div>
            <div className="imgs">
              <img src={galleryImg4} alt="gallery img" />
            </div>
            <div className="imgs">
              <img src={galleryImg5} alt="gallery img" />
            </div>
            <div className="imgs">
              <img src={galleryImg6} alt="gallery img" />
            </div>
            <div className="imgs">
              <img src={galleryImg7} alt="gallery img" />
            </div>
            <div className="imgs">
              <img src={galleryImg8} alt="gallery img" />
            </div>
          </div>

          <div className="img-preview">
            <img src={img} alt="gallery img" />
            <span className="closeBtn" onClick={closePreview}>
              <GrClose />
            </span>
          </div>
        </motion.div>
      </>
    );
}

export default BizHaqimizda;