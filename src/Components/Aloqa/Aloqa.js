import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import './Aloqa.css';


import { motion } from "framer-motion";

function Aloqa() {

    const form = useRef();

    const sendEmail = (e) => {
         e.preventDefault();
        
        emailjs
        .sendForm(
            "service_43gjdlw",
            "template_ez1rel5",
            form.current,
            "Kv5dRlnSIERbwbhD5"
        )
        .then(
            (result) => {
            console.log(result.text);
            },
            (error) => {
            console.log(error.text);
            }
        );

      e.target.reset();
    }


    return (
      <>
        <motion.div
          className="banner-aloqa"
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
          <h1>Bizga savolingiz bormi ?</h1>
        </motion.div>

        <div className="form-div">
          <div className="left-form-menu">
            <h1>Aloqaga chiqamiz</h1>
            <p>
              Bizga habaringizni qoldiring va biz sizga 24 siat ichida aloqaga
              chiqamiz.
            </p>
            <ul>
              <li>
                Manzil: Namangan shahar Davlat hizmatlari binosi 22 uy 11221
              </li>
              <li>Email pochta: info@company.com</li>
              <li>Telefon: + 69 239 50 15</li>
            </ul>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <h1>Habaringizni qoldiring</h1>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ismingiz"
                  name="name"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email pochtangiz"
                  name="email"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mavzu"
                  name="subject"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Habaringiz"
                  name="message"
                ></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </>
    );
}

export default Aloqa;