import React from 'react';
import { useEffect } from 'react';
import Img1 from '../../imgs/yangi.jpg'
import Img2 from '../../imgs/yangui 2.jpg'
import Img3 from '../../imgs/slider3.jpg'
import bizhaqimizdaImg from '../../imgs/bizhaqimizda img1.png'
import impuls1Img from '../../imgs/impuls1.jpg'
import impuls2Img from '../../imgs/impuls2.jpg'
import impuls3Img from '../../imgs/impuls3.jpg'
import './BoshSahifa.css'
import { Link } from 'react-router-dom';

import { IoIosArrowDown } from 'react-icons/io'

import { motion } from 'framer-motion';


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
            <h4>Maktabni bitirmasdan</h4>
            <h1>Biz bilan talaba bo'ling</h1>
          </div>
          <div className="img imgs-1">
            <img src={Img2} alt=""></img>
            <h4>Imtihonlarni mavaffaqiyatli topshirib</h4>
            <h1>Talabalikni oldindan naqd qilib qo'ying</h1>
          </div>
          <div className="img imgs-2">
            <img src={Img3} alt=""></img>
            <h4>Impuls Tibbiyot Instituti</h4>
            <h1>Tayorlov kurslarida o'qing</h1>
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
              Impuls Tibbiyot Instituti
            </motion.h1>
            <motion.p
              custom={1}
              variants={TextAnimation}
              className="reveal-text"
            >
              IMPULS instituti faqat tibbiyot sohasida ta'lim berishga
              mo'ljallangan . IMPULS instituti O'zbekistonda joylashgan bo'lib ,
              Yevropa va Osiyodagi tibbiyot oliygohlari standartlarini o'zida
              mujassamlashtirgan .
              <br />
              <br />
              Ta'lim berishning eng zamonaviy va yangicha metodlaridan
              foydalanadigan institutdir . IMPULS institutida talabalar ingiliz
              tilida tibbiyot mutaxassisligini mukammal o'rganib , nafaqat
              O'zbekistonda balki Yevropa va Osiyoda ham ishlash imkoniyatiga
              ega bo'ladilar. Bu institut kredit modul tizimiga asoslangan holda
              o'qitadi.
              <br />
              <br />
              Zamonaviy o'qitish tizimi deyilishiga sabab bizning institutda 80%
              darslar amaliyotga asoslangan holda bo'ladi , bu esa davlat
              oliygohlaridan tubdan farq qiladi.
            </motion.p>
            <Link onClick={upBtnF} to="/bizhaqimizda" className="btn">
              Biz haqimizda batafsil
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
              <img src={impuls1Img} alt="" />
            </div>
            <h1>IMPULS</h1>
            <p>medical institute bilan jahon bilimlar eshigini oching.</p>
          </motion.div>

          <motion.div
            className="impuls-box"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="img-impuls-box">
              <img src={impuls2Img} alt="" />
            </div>
            <h1>Xalqaro</h1>
            <p>
              standartdagi tibbiyot instituti endi Namanganda sen biz bilan
              bo'lishing kerak.
            </p>
          </motion.div>

          <motion.div
            className="impuls-box"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="img-impuls-box">
              <img src={impuls3Img} alt="" />
            </div>
            <h1>Namanganda</h1>
            <p>
              ilk bor davlat xususiy sherikchilik asosida raqamli ibbiyot
              instituti.
            </p>
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
            - Ko'p Beriladigan Savollar -
          </motion.h1>
          <div className="accordion-box">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="left-menu"
            >
              <p>
                Impuls universiteti o'qitish, o'rganish va tadqiqot sohasida
                mukammallikka intiladi. Impuls universiteti va uning asoschisi
                talabalar, xodimlar uchun eng zamonaviy sharoitlarni yaratish
                ustida astoydil harakat qilmoqda. Bizning maqsadimiz nafaqat
                O‘zbekistonda, balki Markaziy Osiyoda ham eng yaxshi ta’lim va
                tadqiqot muhitini yaratishdir.
              </p>
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
                    <h1>Diplomingiz O'zbekistonda tan olinadimi ?</h1>
                    <div className="plus">
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className="preview ">
                    <p>
                      IMPULS Medical institutini tamomlagan talabalar diplomi
                      nafaqat O'zbekiston, balki butun dunyoda tan olinadi.
                    </p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>Shartnoma toʻlovi qancha?</h1>
                    <div className="plus">
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className="preview">
                    <p>
                      Shartnoma toʻlovi 40000000 soʻm($4000) tashkil etadi,
                      bundan tashqari bizda boʻlib toʻlash imkoniyati mavjud.
                    </p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>Mashgʻulotlar qaysi tillarda olib boriladi?</h1>
                    <div className="plus">
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className="preview">
                    <p>
                      Barcha mashgʻulotlar guruhga qarab o'zbek yoki ingliz
                      tillarida o'tkaziladi.
                    </p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>Stipendiyalar bormi?</h1>
                    <div className="plus">
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className="preview">
                    <p>
                      Biz xususiy universitet bo'lganligimiz sababli, IMPULS
                      Medical oʻz-o'zini moliyalashtiradi va talabalarga
                      stipendiya to'lash imkoniga ega emas.
                    </p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>Qabul uchun qanday hujjatlar kerak?</h1>
                    <div className="plus">
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className="preview">
                    <p>
                      "IMPULS Medical"ga muvaffaqiyatli qabul qilinish
                      bosqichlaridan biri hujjat topshirishdir. Buning uchun siz
                      quyidagilarni taqdim etishingiz kerak: —Maktab
                      attestatining asl nusxasi yoki o'rta ta'lim diplomi;
                      <br />
                      <span>— Pasport nusxasi (2 dona);</span>
                      <br />
                      <span>— Rasm 3x4 (6 ta).</span>
                      <br />
                      Hujjatlar PDF formatida yoki Namangan shahridagi davlat
                      xizmatlari markazida onlayn tarzda taqdim etilishi mumkin.
                    </p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>Tayyorgarlik kurslarida nimalar o'tiladi</h1>
                    <div className="plus">
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className="preview">
                    <p>
                      Imtihonlarni muvaffaqiyatli topshirish va "IMPULS
                      Medical"da grant asosida taʼlim olish uchun tayyorgarlik
                      kurslarini oʼtash kerak. Dastur 6 oy davom etadi va u
                      ingliz tili va anatomiya fanlaridan iborat. Kursni
                      tugatganlar uchun IELTS balli 5.0 boʻladi.
                      <br />
                      Bu oʻz bilimingizni oshirish va universitetdagi byudjet
                      o'rninni egallash uchun ajoyib imkoniyatdir
                    </p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>Talabalarga nimalarni taklif qilayapmiz?</h1>
                    <div className="plus">
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className="preview">
                    <p>
                      Imtihonlarni yuqori ballga topshirganlar uchun IMPULS
                      Medical maxsus grantlar taqdim etadi. Bizda universitetga
                      kirish imtihonlari yaʼni, anatomiya va ingliz tili
                      bo'yicha maxsus tayyorgarlik kurslari o'tkaziladi, ularni
                      bitirganlarga IELTS imtihonidan oʻtish balli 5.0 etin
                      belgilanadi ✅
                      <br />
                      Bularning barchasi talabalarning intilishlarini
                      qoʻllab-quvvatlash va kelajakka boʻlgan ishonchlarini
                      oshirish maqsadida amalga oshiriladi
                    </p>
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