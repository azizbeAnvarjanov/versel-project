import React from 'react';
import './Kutibxona.css';

import db from "../Firebase/Firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";


import { motion } from "framer-motion";

function Kutibxona() {

  const [bookdata, setBookData] = useState([]);


  useEffect(() => {
      onSnapshot(collection(db, "books"), (snapshot) => {
          setBookData(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

    

  

    function getBook(e, bookdata) {
      let indexBook = e.target.parentElement.parentElement.id;
      let obj = {
        name: bookdata[indexBook].book_name,
        imgSrc: bookdata[indexBook].img,
        link: bookdata[indexBook].link,
        avtor: bookdata[indexBook].avtor,
        year: bookdata[indexBook].year,
        qr: bookdata[indexBook].qr,
      };

      let book_img = document.querySelector('.gl-book-img');
      let name = document.querySelector('.name')
      let avtor = document.querySelector('.avtor')
      let year = document.querySelector('.year')
      let button = document.querySelector('.button');
      
      
      book_img.src = obj.imgSrc;
      name.innerHTML = "Kitob: " + obj.name;
      avtor.innerHTML = "Avtor: " + obj.avtor;
      year.innerHTML = "Chop etilgan yil: " + obj.year;
      button.href = obj.link;

      let parentBox = document.querySelector(".book-popup");
      parentBox.style.display = "grid";
    }

    function removePop() {
        document.querySelector(".book-popup").style.display = 'none';
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
          <h1>Impuls Institut Kutibxonasi</h1>
        </motion.div>
        <div className="books_box">
          <div className="input">
            <input onInput={search} type="text" />
            <button>Search</button>
          </div>
          <div className="buttons">
            <span
              className={tabClass === 1 ? "active" : ""}
              onClick={() => tabs(1)}
            >
              Adabiy Kitoblar
            </span>
            <span
              className={tabClass === 2 ? "active" : ""}
              onClick={() => tabs(2)}
            >
              Ilmiy Kitoblar
            </span>
          </div>
          <div className="books">
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
                  </div>
                </motion.div>
              ))}
            </div>
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
          </div>
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
              <h3 className="name">Kitob:obj.name</h3>
              <p className="avtor">Avtor: obj.avtor</p>
              <p className="year">Chop etilgan yil: obj.year</p>
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


// {
//   bookdata.map((el) => (
//     <div key={el.id} id={el.id} className="book">
//       <div className="book-img">
//         <img src={el.img} alt="" />
//       </div>
//       <div className="book-title">
//         <p className="title" onClick={getBook}>
//           {el.book_name}
//         </p>
//       </div>
//     </div>
//   ));
// }

