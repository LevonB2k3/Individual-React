import React from 'react';
import './page3.css';
import image3 from './image3.jpg';
import image4 from './image4.jpg';

function Page3() {
  return (
    <div className="page-3">
      <h1 className="tittle-2">
        RECENT <br />
        PROJECT
      </h1>
      <div className="page-3images">
        <img
          className="image-3"
          src={image3}
          alt="image3"
        />
        <img
          className="image-4"
          src={image4}
          alt="image4"
        />
      </div>
      <div className="page-3text">
        <div className="p4-5">
          <h3 className="p4">Beal and Harlow</h3>
          <h4 className="p5">Editorial photography</h4>
        </div>
        <div className="p6-7">
          <h3 className="p6">2025</h3>
          <h4 className="p7">
            This project was for their Fall Fashion <br/>
            Book.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Page3;
