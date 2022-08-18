import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import './Aloqa.css';


import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

function Aloqa() {
  const { t } = useTranslation();

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
          <motion.h1
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
          >
            {t("aloqa_h1")}
          </motion.h1>
        </motion.div>

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
                  name="subject"
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
        </div>
      </>
    );
}

export default Aloqa;