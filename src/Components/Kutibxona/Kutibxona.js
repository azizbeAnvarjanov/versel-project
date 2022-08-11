import React from 'react';

import db from "../Firebase/Firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

function Kutibxona() {

    const [bookdata, setBookData] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "books"), (snapshot) => {
            setBookData(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);


    return (
        <>
            <div className='boosks'>
                {
                    bookdata.map(el => (
                        <div key={el.id} className='book'>
                            <a href={el.link}>{el.book_name}</a>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Kutibxona;