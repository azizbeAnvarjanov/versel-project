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

function BizHaqimizda() {

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
          <h1>Impuls Tibbiyo Institutiga</h1>
          <h2>Hush Kelibsiz</h2>
        </motion.div>

        <div className="header">
          <h1>Impuls Tibbiyo Instituti</h1>
          <p>
            Impuls universiteti Oʻzbekiston Vazirlar Mahkamasining 2019-yil
            15-fevraldagi qaroriga asosan tashkil etilgan. Universitetimiz oʻz
            oldiga mintaqadagi yetakchi oliy taʼlim muassasasi boʻlish maqsadini
            amalga oshirish va Oʻzbekiston taraqqiyotiga hissa qoʻshishni maqsad
            qilgan. geografik joylashuvimizning ahamiyatini bilamiz va
            tushunamiz.
            <br />
            <br />
            Universitetimizning vazifasi: Mamlakatga zarur boʻlgan sohalarda
            yetarli miqdordagi odamlarni oʻqitish, professional kadrlar
            tayyorlash boʻyicha yechimlar taklif qilish, yangi taʼlim
            texnologiyalarini ishlab chiqarish, taʼlim va tarbiya tamoyillarini
            ishlab chiqish. Impuls universiteti turli mamlakatlardan kelgan
            talabalarga xalqaro miqyosda tan olingan standartlarda ta’lim
            beradi. Universitet fundamental, tibbiy, aniq va gumanitar fanlar
            bo‘yicha yuqori malakali mutaxassislar tayyorlaydi. Tibbiyot
            Doktori Dasturiga qo'shimcha ravishda, Magistrlik dasturi yuqori
            malakali xalqaro miqyosda tan olingan akademik xodimlar tomonidan
            taklif etiladi.
            <br />
            <br />
            O‘quv jarayoni yetakchi xalqaro ilmiy-tadqiqot muassasalari,
            jumladan, tibbiyot yo‘nalishidagi Gachon universiteti (Janubiy
            Koreya) va xorijda mehnat qilayotgan yurtdoshlarimiz bilan
            hamkorlikda olib borilmoqda. O‘qish ingliz tilida bo‘lib, 6 yil
            davom etadi (2 yil tayyorgarlik kursi, 4 yil tibbiyot fakultetida
            tibbiy kurs). Bitiruvchilarga oliy ma'lumot to'g'risidagi diplom
            beriladi. Tadqiqot, kashfiyot va haqiqatni izlash universitetning
            muhim xususiyatlari hisoblanadi.
            <br />
            <br />
            Impuls universiteti bu mas’uliyatni yaxshi biladi va o‘zini
            talabalar va professor-o‘qituvchilar birgalikda samarali va samarali
            tadqiqot olib borishlari mumkin bo‘lgan intellektual muhitni
            yaratishga bag‘ishlaydi. Universitet o'z talabalariga eng zamonaviy
            va eng sifatli ta'limni taklif qilishni maqsad qilgan.
            Universitetimizda ushbu uzoq ta’lim yo‘liga qadam qo‘ygan har bir
            talaba o‘z bilimlari bilan to‘liq ta’minlangan va to‘liq
            ta’minlangan shaxs sifatida bitiradi.
          </p>
        </div>

        <div className="galereya">
          <h1>- Institutimiznig ichki ko'rinishlari -</h1>
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