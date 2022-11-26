import React from 'react'

import db from "./Firebase/Firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

import Kutibxona from './Kutibxona/Kutibxona';

function Books() {

  const [bookdata, setBookData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(40);  


    useEffect(() => {
      const fetchBooks = () => {
        setLoading(true);
        onSnapshot(collection(db, "books"), (snapshot) => {
          setBookData(snapshot.docs.map((doc) => doc.data()));
        });
        setLoading(false)
      }

      fetchBooks();

    }, []);

  const indexOfLastBook = currentPage * postPerPage;
  const indexOfFirstBook = indexOfLastBook - postPerPage;
  const currentBooks = bookdata.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(bookdata.length / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="books_wrap">
            {
                currentBooks.map(book => (
                    <h1 key={book.key}>
                        {book.avtor}
                    </h1>
                ))
            }    
        </div>   
      <ul className='pagination'>
        {
          pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} href="#" className='page-link'>
                {number}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Books