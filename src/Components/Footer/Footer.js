import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { IoIosArrowUp } from 'react-icons/io';
import { FaPhone , FaTelegram, FaHotel} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { GrInstagram } from 'react-icons/gr'

function Footer() {

    function upBtnF() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }

    return (
        <>
            <footer className="reveal">
                <div className="footer-box">
                    <div className="contact-info">
                        <h1>Aloqa ma'lumotlari</h1>
                        <Link to="/">
                            <FaHotel />
                            Impuls Tibbiyot Instituti
                        </Link>
                        <Link to="#">
                            <FaPhone />
                            + 69 239 50 15
                        </Link>
                        <Link to="#">
                            <MdEmail />
                            info@company.com
                        </Link>
                        <Link to="#">
                            <FaTelegram />
                            Telegram
                        </Link>
                        <Link to="https://instagram.com/aziz__7775?utm_medium=copy_link">
                            <GrInstagram />
                            Instagram
                        </Link>
                    </div>
                    <div className="hamkorlar-info">
                        <h1>Hamkorlarimiz</h1>
                        <Link to="#">Hamkorlarimiz link</Link>
                        <Link to="#">Hamkorlarimiz link</Link>
                        <Link to="#">Hamkorlarimiz link</Link>
                        <Link to="#">Hamkorlarimiz link</Link>
                    </div>
                    <div className="sections-info">
                        <h1>Sahifalarimiz</h1>
                        <Link to="/bizhaqimizda">Biz Haqimizda</Link>
                        <Link to="/kutibxona">Kutibxona</Link>
                        <Link to="/aloqa">Aloqa</Link>
                    </div>
                </div>

                <div className="footer-copyryter">
                    <div className="btn-up" onClick={upBtnF}><IoIosArrowUp /></div>
                </div>
            </footer>   
        </>
    );
}

export default Footer;