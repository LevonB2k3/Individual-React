import React from 'react';
import './page5.css';
import image6 from './image6.jpg';
import image7 from './image7.jpg';

function Page5() {
  return (
    <div className="page-5">
      <h1 className="tittle-4">
        FEATURED <br />
        PROJECT
      </h1>
      <div className="page-5images">
        <img
          className="image-6"
          src={image6}
          alt="image6"
        />
        <img
          className="image-7"
          src={image7}
          alt="image7"
        />
      </div>
      <div className="page-5text">
        <div className="p10-11">
          <h3 className="p10">Stripple Unlimited</h3>
          <h4 className="p11">Commercial Photography</h4>
        </div>
        <div className="p12-13">
          <h3 className="p12">2023</h3>
          <h4 className="p13">
            This project was for the client's <br/>
            signature collection.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Page5;
