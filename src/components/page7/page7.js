import React from 'react';
import './page7.css';
import image9 from './image9.jpg';

function Page7() {
  return (
    <div className="page-7">
      <h1 className="tittle-6">WORK WITH ME</h1>
      <div className="page-7inside">
        <div className="p18-19">
          <h2 className="p18">
            Email: <br />
            hello@reallygreatsite.com
          </h2>
          <h2 className="p19">
            Address:<br />
            123 Anywhere St. <br />
            Any City, ST 12345
          </h2>
        </div>
        <img
          className="image-9"
          src={image9}
          alt="image9"
        />
      </div>
    </div>  ); }

export default Page7;