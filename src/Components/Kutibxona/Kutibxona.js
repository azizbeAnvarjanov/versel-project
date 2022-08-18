import React from 'react';
import './Kutibxona.css';

import db from "../Firebase/Firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";


import { motion } from "framer-motion";


import { useTranslation } from "react-i18next";


  function Kutibxona() {

    
  const { t } = useTranslation();


  const [bookdata, setBookData] = useState([]);


  useEffect(() => {
      onSnapshot(collection(db, "books"), (snapshot) => {
          setBookData(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

        

    

  function getBook(e, bookdata) {
    let indexBook = e.target.parentElement.parentElement;


    let target_img = indexBook.querySelector('img');
    let target_name = indexBook.querySelector('.title');
    let target_avtor = indexBook.querySelector('.target_avtor');
    let target_year = indexBook.querySelector('.target_year');
    let target_link = indexBook.querySelector('.target_link');
    

    document.querySelector(".gl-book-img").src = target_img.src;
    document.querySelector(".name").innerHTML = "Kitob: " + target_name.innerHTML;
    document.querySelector(".avtor").innerHTML = "Avtor: " + target_avtor.innerHTML;
    document.querySelector(".year").innerHTML = "Chop etilgan yil: " + target_year.innerHTML;
    document.querySelector('.button').href = target_link.innerHTML;

    let parentBox = document.querySelector(".book-popup");
    parentBox.classList.add('active');
  }

  function removePop() {
      document.querySelector(".book-popup").classList.remove('active');
  }



  function search(e) {

    let items = document.querySelectorAll(".title");


    let searchValue = e.target.value.toLowerCase();
    

    items.forEach((el) => {
      let item = el.textContent.toLowerCase();

      item.includes(searchValue)
        ? (el.parentElement.parentElement.style.display = "flex")
        : (el.parentElement.parentElement.style.display = "none");
    });

  }


  const [tabClass, setTabClass] = useState(1);

  const tabs = (number) => {
      setTabClass(number);
  }


  const [bookdata2, setBookData2] = useState([]);


  useEffect(() => {
    onSnapshot(collection(db, "anatomiya"), (snapshot) => {
      setBookData2(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);



    return (
      <>
        <motion.div
          className="banner-books"
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
          <h1>{t("kutibxona_banner_h1")}</h1>
        </motion.div>

        <div className="books_box">
          {/* search books box */}

          <div className="input">
            <input onInput={search} type="text" />
            <button>{t("search_btn")}</button>
          </div>

          {/* search books box */}

          {/* tabs buttons */}

          <div className="buttons">
            <span
              className={tabClass === 1 ? "active" : ""}
              onClick={() => tabs(1)}
            >
              {t("adabiy_kitoblar")}
            </span>
            <span
              className={tabClass === 2 ? "active" : ""}
              onClick={() => tabs(2)}
            >
              {t("ilmiy_kitoblar")}
            </span>
          </div>

          {/* tabs buttons */}

          {/* Books */}

          <div className="books">
            {/* adabiy kitoblar */}

            <div
              className={
                tabClass === 1 ? "adabiy-kitoblar active" : "adabiy-kitoblar"
              }
            >
              {bookdata.map((el) => (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                  key={el.id}
                  id={el.id}
                  className="book"
                >
                  <div className="book-img">
                    <img src={el.img} alt="" />
                  </div>
                  <div className="book-title">
                    <p className="title" onClick={(e) => getBook(e, bookdata)}>
                      {el.book_name}
                    </p>
                    <p className="target_avtor">
                      {el.avtor}
                    </p>
                    <p className="target_link">
                      {el.link}
                    </p>
                    <p className="target_year">
                      {el.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* adabiy kitoblar */}

            {/* ilmiy kitoblar*/}

            <div
              className={
                tabClass === 2 ? "ilmiy-kitoblar active" : "ilmiy-kitoblar"
              }
            >
              {bookdata2.map((el) => (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                  key={el.id}
                  id={el.id}
                  className="book"
                >
                  <div className="book-img">
                    <img src={el.img} alt="" />
                  </div>
                  <div className="book-title">
                    <p className="title" onClick={(e) => getBook(e, bookdata2)}>
                      {el.book_name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ilmiy kitoblar*/}
          </div>

          {/* Books */}

        </div>

        <div className="book-popup">
          <div className="book-info">
            <div className="close_popup" onClick={removePop}>
              <GrClose />
            </div>

            <div className="book-info-img">
              <img className="gl-book-img" src=""></img>
            </div>
            <div className="book-infos">
              <h3 className="name"></h3>
              <p className="avtor"></p>
              <p className="year"></p>
              <a target="_blank" className="button" href="#">
                O'qish
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default Kutibxona;



