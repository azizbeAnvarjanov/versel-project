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
          <h1>{t("banner_h1")}</h1>
          <h2>{t("banner_h2")}</h2>
        </motion.div>

        <div className="header">
          <h1>{t("header_h1")}</h1>
          <p>
            {t("header_p_1")}
            <br />
            <br />
            {t("header_p_2")}
            <br />
            <br />
            {t("header_p_3")}
            <br />
            <br />
            {t("header_p_4")}
          </p>
        </div>

        <div className="galereya">
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
        </div>
      </>
    );
}

export default BizHaqimizda;