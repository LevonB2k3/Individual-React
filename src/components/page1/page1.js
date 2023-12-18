import React from 'react';
import './page1.css';
import image1 from './image1.jpg'
function Page1() {
  return (
    <div className="page-1">
      <div className="image-1">
        <img src={image1} alt="image1" />
        <div className="image-1text">
          <h1 className="tittle">Photography Portfolio</h1>
          <div className="page-1text">
            <p className="p">Louise Edwards <br/>Photographer</p>
            <p className="p1">send me an email</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
