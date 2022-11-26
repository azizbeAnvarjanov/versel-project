import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import './Aloqa.css';
import { MdDone } from 'react-icons/md';  
import { useState } from 'react';


import { useTranslation } from "react-i18next";

function Aloqa() {



  const [sucsess, setSucsess] = useState(false);



  const { t } = useTranslation();

  const form = useRef();


  function PopupF() {
    // !sucsess ? setSucsess(true) : setSucsess(false);
    if (!sucsess) {
      setSucsess(true);
      document.querySelector('.message-ok')
        .innerHTML = t("message-ok")
    } else {
      setSucsess(false);
    }

  }
  const sendEmail = (e) => {
        e.preventDefault();
      
      emailjs
      .sendForm(
          "service_ih5po9c",
          "template_4j57zcp",
          form.current,
          "uHa25MsI2MHW7-nLQ"
      )
      .then(
          (result) => {
            if (result.text == 'OK') {
              PopupF();
            }
          },
          (error) => {
          console.log(error.text);
          }
      );

      e.target.reset();
    }


    return (
      <>
        <div
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
          <h1
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
          >
            {t("aloqa_h1")}
          </h1>
        </div>

        <div className="form-div">
          <div className="left-form-menu">
            <h1>{t("left_menu_h1")}</h1>
            <p>{t("left-menu_p")}</p>
            <ul>
              <li>{t("manzil")}</li>
              <li>{t("pochta")}</li>
              <li>{t("telefon")}</li>
            </ul>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <h1>{t("habar")}</h1>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("pl_1")}
                  name="name"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder={t("pl_2")}
                  name="email"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("pl_3")}
                  name="phoneNumber"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder={t("textarea")}
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                <input
                  type="submit"
                  className="btn btn-info"
                  value={t("form_btn")}
                ></input>
              </div>
            </div>
          </form>
          <div className={sucsess ? 'result-popup active' : 'result-popup'}>
              <div className="donebtn-box">
                <MdDone className='donebtn' />
              </div>
              <p className='message-ok'></p>
            <button onClick={PopupF}>Done</button>
          </div>
        </div>
      </>
    );
}

export default Aloqa;