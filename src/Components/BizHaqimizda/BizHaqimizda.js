import React, { useState } from 'react';
import './BizHaqimizda.css';
import { GrClose } from 'react-icons/gr'

import galleryImg1 from '../../imgs/binoni ichi rasmlar/1.jpg'
import galleryImg2 from '../../imgs/binoni ichi rasmlar/2.jpg'
import galleryImg3 from '../../imgs/binoni ichi rasmlar/3.jpg'
import galleryImg4 from '../../imgs/binoni ichi rasmlar/4.jpg'
import galleryImg5 from '../../imgs/binoni ichi rasmlar/5.jpg'
import galleryImg6 from '../../imgs/binoni ichi rasmlar/6.jpg'
import galleryImg7 from '../../imgs/binoni ichi rasmlar/7.jpg'
import galleryImg8 from '../../imgs/binoni ichi rasmlar/8.jpg'



function BizHaqimizda() {

    const [img, setImg] = useState('');

    function gallery(e) {
        let preview = document.querySelector('.img-preview');
        
        
        preview.classList.add('active');
        setImg(e.target.src);
    }
    
    function closePreview() {
        let preview = document.querySelector('.img-preview');
        preview.classList.remove('active');
    }


    return (
      <>
        <div className="banner" id="home">
          <h1>Impuls Tibbiyo Institutiga</h1>
          <h2>Hush Kelibsiz</h2>
        </div>

        <div className="header">
          <h1>Impuls Tibbiyo Instituti</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at
            veniam tempore facilis amet repellendus dolore et cupiditate ducimus
            dolores maxime id voluptates debitis provident voluptate, deleniti
            rem aspernatur! Ullam accusamus libero, praesentium officia cum eius
            quia eaque expedita consectetur eos harum dignissimos qui quisquam
            soluta magni aliquam ipsum perspiciatis iusto autem cumque,
            voluptate eligendi? Dolore excepturi dolorem fuga quis. Provident
            praesentium consectetur eligendi recusandae odio amet id saepe
            sequi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            deleniti commodi aperiam harum error architecto iste maiores
            molestiae, doloremque quasi sint asperiores inventore earum
            voluptas, minus porro excepturi fuga velit amet? Similique eos
            officiis facere quidem voluptatum sunt, dignissimos id.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            deleniti commodi aperiam harum error architecto iste maiores
            molestiae, doloremque quasi sint asperiores inventore earum
            voluptas, minus porro excepturi fuga velit amet? Similique eos
            officiis facere quidem voluptatum sunt, dignissimos id.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            deleniti commodi aperiam harum error architecto iste maiores
            molestiae, doloremque quasi sint asperiores inventore earum
            voluptas, minus porro excepturi fuga velit amet? Similique eos
            officiis facere quidem voluptatum sunt, dignissimos id.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            deleniti commodi aperiam harum error architecto iste maiores
            molestiae, doloremque quasi sint asperiores inventore earum
            voluptas, minus porro excepturi fuga velit amet? Similique eos
            officiis facere quidem voluptatum sunt, dignissimos id.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            deleniti commodi aperiam harum error architecto iste maiores
            molestiae, doloremque quasi sint asperiores inventore earum
            voluptas, minus porro excepturi fuga velit amet? Similique eos
            officiis facere quidem voluptatum sunt, dignissimos id.
          </p>
        </div>

        <div className="galereya">
          <h1>- Institutimiznig ichki ko'rinishlari -</h1>
          <div className="galereya-box" onClick={gallery}>
            <div className="imgs">
              <img src={galleryImg1} alt="gallery img" />
            </div>
            <div className="imgs">
              <img src={galleryImg2} alt="gallery img" />
            </div>
            <div className="imgs">
              <img src={galleryImg3} alt="gallery img" />
            </div>
            <div className="imgs">
              <img src={galleryImg4} alt="gallery img" />
            </div>
            <div className="imgs">
              <img src={galleryImg5} alt="gallery img" />
            </div>
            <div className="imgs">
              <img src={galleryImg6} alt="gallery img" />
            </div>
            <div className="imgs">
              <img src={galleryImg7} alt="gallery img" />
            </div>
            <div className="imgs">
              <img src={galleryImg8} alt="gallery img" />
            </div>
          </div>

          <div className="img-preview">
            <img src={img} alt="gallery img" />
            <span className="closeBtn" onClick={closePreview}>
              <GrClose />
            </span>
          </div>
        </div>
      </>
    );
}

export default BizHaqimizda;