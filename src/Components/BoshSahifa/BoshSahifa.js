import React from 'react';
import { useEffect } from 'react';
import Img1 from '../../imgs/slider1.jpg'
import Img2 from '../../imgs/slider2.jpg'
import Img3 from '../../imgs/slider3.jpg'
import bizhaqimizdaImg from '../../imgs/bizhaqimizda img1.png'
import impuls1Img from '../../imgs/impuls1.jpg'
import impuls2Img from '../../imgs/impuls2.jpg'
import impuls3Img from '../../imgs/impuls3.jpg'
import './BoshSahifa.css'
import { Link } from 'react-router-dom';

import { IoIosArrowDown } from 'react-icons/io'



function BoshSahifa() {

    
    useEffect(() => {
        let imgs = document.querySelectorAll('.img');

        let currSlide = 0;

        function slider(el) {
            imgs.forEach(el => el.classList.remove('active'));
            imgs[el].classList.add('active');
        }

        setInterval(() => {
            currSlide++
            if (currSlide === imgs.length) {
                currSlide = 0
            }
            slider(currSlide);
        }, 6000);
    }, []);


    function accordion(e) {
        document.querySelectorAll('.accordion')
        .forEach(el => el.classList.remove('active'));
        e.target.parentElement.classList.add('active')
    }

  

    return (
        <>
            <header id="boshSahifa">
                <div className="img imgs-0 active">
                    <img src={Img1} alt=""></img>
                    <h4>Maktabni bitirmasdan</h4>
                    <h1>Biz bilan talaba bo'ling</h1>
                </div>
                <div className="img imgs-1">
                    <img src={Img2} alt=""></img>
                    <h4>Imtihonlarni mavaffaqiyatli topshirib</h4>
                    <h1>Talabalikni oldindan naqd qilib qo'ying</h1>
                </div>
                <div className="img imgs-2">
                    <img src={Img3} alt=""></img>
                    <h4>Impuls Tibbiyot Instituti</h4>
                    <h1>Tayorlov kurslarida o'qing</h1>
                </div>
            </header>   



        <div className="biz-haqimizda reveal section" id="bizHaqimizda">
           <div className='bizhaqimizda-text'>
                <h1 className="reveal-text">Impuls Tibbiyot Instituti</h1>
                {/* <br> */}
                <p className="reveal-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, animi? Autem
                    perferendis earum, itaque
                    asperiores culpa enim facilis nulla voluptate dolorem laborum quos cumque neque iste harum placeat nam
                    porro.</p>
                {/* <br> */}
                <p className="reveal-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis consequuntur expedita
                    natus, eum sed illo
                    rerum praesentium? Dolorem, ipsum deleniti! Quas labore officia cum nemo dicta optio ea sit quo!</p>
                {/* <br> */}
                <p className="reveal-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sapiente omnis placeat,
                    officiis officia nemo
                    veniam! Vero minima nulla beatae, omnis rerum tempora, iure recusandae repellendus maiores, explicabo
                    excepturi consectetur.</p>
                <Link to="/bizhaqimizda" className="btn">Biz haqimizda batafsil</Link>
           </div>
           <div className="bizhaqimzida-img">
                <img src={bizhaqimizdaImg} alt="" />
           </div>
        </div>


        <div className="impuls">
            <div className="impuls-box">
                <div className="img-impuls-box">
                    <img src={impuls1Img} alt="" />
                </div>
                <h1>IMPULS</h1>
                <p>medical institute bilan jahon bilimlar eshigini oching.</p>
            </div>
            <div className="impuls-box">
                <div className="img-impuls-box">
                    <img src={impuls2Img} alt="" />
                </div>
                <h1>Xalqaro</h1>
                <p>standartdagi tibbiyot instituti endi Namanganda sen biz bilan bo'lishing kerak.</p>
            </div>
            <div className="impuls-box">
                <div className="img-impuls-box">
                    <img src={impuls3Img} alt="" />
                </div>
                <h1>Namanganda</h1>
                <p>ilk bor davlat xususiy sherikchilik asosida raqamli ibbiyot instituti.</p>
            </div>
        </div>







        <div className="accordion-section">
            <h1 className="first">- Ko'p Beriladigan Savollar -</h1>
           <div className="accordion-box">
             <div className="left-menu">
                <h2>Lorem ipsum dolor sit amet consectetur </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia illum veritatis, magni odio nobis eligendi autem est consectetur perspiciatis quos sed, placeat vero eos ut mollitia tempora, laboriosam libero itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, doloremque iste voluptatum vero exercitationem obcaecati, vitae magni ipsam blanditiis, nisi necessitatibus asperiores iure dignissimos! Exercitationem minima atque unde eius illum.</p>
            </div>
            <div className="right-menu" onClick={accordion}>
                 <div className="accord-box">
                    <div className="accordion active">
                        <div className="savol-div">
                            <h1>Savol</h1>
                            <div className="plus">
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="preview ">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quibusdam, corporis blanditiis
                                aliquam velit voluptatum aperiam impedit adipisci cumque illum modi? Consequatur magni ratione
                                provident saepe, placeat quo veniam quibusdam!</p>
                
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="savol-div">
                            <h1>Savol</h1>
                            <div className="plus">
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="preview">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quibusdam, corporis blanditiis
                                aliquam velit voluptatum aperiam impedit adipisci cumque illum modi? Consequatur magni ratione
                                provident saepe, placeat quo veniam quibusdam!</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="savol-div">
                            <h1>Savol</h1>
                            <div className="plus">
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="preview">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quibusdam, corporis blanditiis
                                aliquam velit voluptatum aperiam impedit adipisci cumque illum modi? Consequatur magni ratione
                                provident saepe, placeat quo veniam quibusdam!</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="savol-div">
                            <h1>Savol</h1>
                            <div className="plus">
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="preview">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quibusdam, corporis blanditiis
                                aliquam velit voluptatum aperiam impedit adipisci cumque illum modi? Consequatur magni ratione
                                provident saepe, placeat quo veniam quibusdam!</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="savol-div">
                            <h1>Savol</h1>
                            <div className="plus">
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="preview">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quibusdam, corporis blanditiis
                                aliquam velit voluptatum aperiam impedit adipisci cumque illum modi? Consequatur magni ratione
                                provident saepe, placeat quo veniam quibusdam!</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="savol-div">
                            <h1>Savol</h1>
                            <div className="plus">
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="preview">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quibusdam, corporis blanditiis
                                aliquam velit voluptatum aperiam impedit adipisci cumque illum modi? Consequatur magni ratione
                                provident saepe, placeat quo veniam quibusdam!</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="savol-div">
                            <h1>Savol</h1>
                            <div className="plus">
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="preview">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quibusdam, corporis blanditiis
                                aliquam velit voluptatum aperiam impedit adipisci cumque illum modi? Consequatur magni ratione
                                provident saepe, placeat quo veniam quibusdam!</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>









        </>
    );
}

export default BoshSahifa;