import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { IoIosArrowUp } from 'react-icons/io';
import { FaPhone , FaTelegram, FaHotel} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { GrInstagram } from 'react-icons/gr'

import MapImg from '../../imgs/GoogleMapTA.jpg'


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
                    <div className="sections-info">
                        <h1>Sahifalarimiz</h1>
                        <Link onClick={upBtnF} to="/">Bosh Sahifa</Link>
                        <Link onClick={upBtnF} to="/bizhaqimizda">Biz Haqimizda</Link>
                        <Link onClick={upBtnF} to="/kutibxona">Kutibxona</Link>
                        <Link onClick={upBtnF} to="/aloqa">Aloqa</Link>
                    </div>
                    <a href="https://goo.gl/maps/B2dZEB1krPrNQPVf7" target='_blank' className="map">
                        <img src={MapImg} alt="" />
                    </a>
                </div>

                <div className="footer-copyryter">
                    <div className="btn-up" onClick={upBtnF}><IoIosArrowUp /></div>
                </div>
            </footer>   
        </>
    );
}

export default Footer;