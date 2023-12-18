import React from 'react';
import './page4.css';
import image5 from './image5.jpg';

function Page4() {
  return (
    <div className="page-4">
      <div className="page-4text">
        <h1 className="tittle-3">
          I like matching my <br />
          subjects to the <br />
          scenery or <br />
          environment to give <br />
          the photos a unified <br />
          color palette.
        </h1>
        <div className="page-4parg">
          <h3 className="p8">2025</h3>
          <h4 className="p9">Beal and Harlow campaign</h4>
        </div>
      </div>
      <div className="page-4image">
        <img className="image-5" src={image5} alt="image5" />
      </div>
    </div>
  );
}

export default Page4;