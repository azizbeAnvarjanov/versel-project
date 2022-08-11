import React from 'react';
import './Kutibxona.css';

import db from "../Firebase/Firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";


function Kutibxona() {

    const [bookdata, setBookData] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "books"), (snapshot) => {
            setBookData(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

     function getBook(e) {
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
       let qr_img = document.querySelector('.qr_img');
       let name = document.querySelector('.name')
       let avtor = document.querySelector('.avtor')
       let year = document.querySelector('.year')
       let button = document.querySelector('.button');
        
       
       book_img.src = obj.imgSrc;
       qr_img.src = obj.qr;
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

    return (
      <>
        <div className="banner-books">
          <h1>Impuls Institut Kutibxonasi</h1>
        </div>
        <div className="books_box">
            <div className="input">
                <input type="text" />
                <button>Search</button>
            </div>
          <div className="books">
            {bookdata.map((el) => (
              <div key={el.id} id={el.id} className="book">
                <div className="book-img">
                  <img src={el.img} alt="" />
                </div>
                <div className="book-title">
                  <p className="title" onClick={getBook}>
                    {el.book_name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="book-popup">
          <div className="book-info">
            <div className="close_popup" onClick={removePop}>
              {" "}
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
              <div className="qr">
                <img className="qr_img" src="${obj.qr}"></img>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Kutibxona;