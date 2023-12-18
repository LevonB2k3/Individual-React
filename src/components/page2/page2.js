import React from 'react';
import './page2.css';
import image2 from './image2.jpg';

function Page2() {
  return (
    <div className="page-2">
      <div className="page-2text">
        <h1 className="tittle-1">BIO</h1>
        <h2 className="p2">
          I am a photographer<br />
          with over ten years<br />
          of experience.
        </h2>
        <h4 className="p3">
          I specialize in commercial and <br />
          editorial photography.
        </h4>
      </div>
      <img className="image-2" src={image2} alt="image2" />
    </div> 
    ); 
}

export default Page2;