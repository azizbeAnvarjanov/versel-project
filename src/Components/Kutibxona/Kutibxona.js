import React from 'react';
import './Kutibxona.css';

import db from "../Firebase/Firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";



import { motion } from "framer-motion";


import { useTranslation } from "react-i18next";


function Kutibxona() {


    const { t } = useTranslation();


    const [bookdata, setBookData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(40);

    useEffect(() => {
        const fetchBooks = () => {
            onSnapshot(collection(db, "books"), (snapshot) => {
                setBookData(snapshot.docs.map((doc) => doc.data()));
            });
        };

        fetchBooks();
    }, []);




    function getBook(e) {
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

    const indexOfLastBook = currentPage * postPerPage;
    const indexOfFirstBook = indexOfLastBook - postPerPage;
    const currentBooks = bookdata.slice(indexOfFirstBook, indexOfLastBook);




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


  

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(bookdata.length / postPerPage); i++) {
        pageNumbers.push(i);
    }



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
                <motion.h1
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.2 }}
                >
                    {t("kutibxona_banner_h1")}
                </motion.h1>
            </motion.div>

            <div className="books_box">
                {/* search books box */}

                <div className="input">
                    <input placeholder='Qidirish...' onInput={search} type="text" />
                </div>

                {/* search books box */}

                {/* Books */}

                <div className="books">
                    <div className={"adabiy-kitoblar"}>
                        {currentBooks.map((el) => (
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ amount: 0.2 }}
                                transition={{ duration: 1.5 }}
                                key={el.id}
                                id={el.id}
                                className="book"
                            >
                                <div className="book-img">
                                    <img src={el.img} alt="" />
                                </div>
                                <div className="book-title">
                                    <p className="title" onClick={(e) => getBook(e, bookdata)}>
                                        {el.name}
                                    </p>
                                    <p className="target_avtor">{el.avtor}</p>
                                    <p className="target_link">{el.link}</p>
                                    <p className="target_year">{el.year}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* adabiy kitoblar */}
                </div>

                {/* Books */}
            </div>
            <div className='pagination'>
                {
                    pageNumbers.map(number => (
                        <a 
                        key={number}
                        onClick={() => paginate(number)}
                        href="#"
                        className='page-item'
                        >
                            {number}
                        </a>
                    ))
                }
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



