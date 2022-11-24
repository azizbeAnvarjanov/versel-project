import React from 'react'
import './USMLE.css'



import { useTranslation } from "react-i18next";

const USMLE = () => {

    
  const { t } = useTranslation();

    
  return (
    <>
      <div className="usmle_banner">
        <h1>{t("about_usmle")}</h1>
      </div>
      <div className="usmle_big_box">
        <div>
          <p>{t("usmle_big_p_1")}</p>
        </div>
        <div>
          <h1>{t("usmle_big_h1_1")}</h1>
          <p>{t("usmle_big_p_2")}</p>
          <p>{t("usmle_big_p_3")}</p>
          <p>{t("usmle_big_p_4")}</p>
          <p>{t("usmle_big_p_5")}</p>
        </div>
        <div>
          <h1>{t("usmle_big_h1_2")}</h1>
          <p>{t("usmle_big_p_6")}</p>
        </div>
        <div>
          <h1>{t("usmle_big_h1_3")}</h1>
          <p>{t("usmle_big_p_7")}</p>
        </div>
        <div>
          <h1>{t("usmle_big_h1_4")}</h1>
          <p>{t("usmle_big_p_8")}</p>
          <p>
            {t("usmle_big_p_8_p")}
            <li>
              {t("usmle_big_p_8_li_1")}
            </li>
            <li>
              {t("usmle_big_p_8_li_2")}
            </li>
            <li>
              {t("usmle_big_p_8_li_3")}
            </li>
            <li>
              {t("usmle_big_p_8_li_4")}
            </li>
          </p>
        </div>
      </div>
    </>
  );
}

export default USMLE