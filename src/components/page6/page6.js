import React from 'react';
import './page6.css';
import image8 from './image8.jpg';

function Page6() {
  return (
    <div className="page-6">
      <img
        className="image-8"
        src={image8}
        alt="image8"
      />
      <div className="page-6text">
        <h1 className="tittle-5">PROFILE</h1>
        <div className="page-6parg">
          <div className="p14-15">
            <h3 className="p14">
              Press <br />
              Mentions
            </h3>
            <h4 className="p15">
              • Louise Edwards wins Gold <br />
              • Santa Solana Post, 2023 <br />
              • See Through their  <br />
              • Venston Bay Journal, 2021 <br />
              • 20 Photographers to Watch in 2020 <br/>
              • Venston Bay Journal, 2019
            </h4>
          </div>
          <div className="p16-17">
            <h3 className="p16">
              Shows & <br />
              Exhibits
            </h3>
            <h4 className="p17">
              • Flicker Medium <br />
              • Venston Bay Gallery, 2023 <br />
              • Modern Tongues <br />
              • DeLonge Gallery, 2022 <br />
              • Geographika <br/>
              • Venston Bay Gallery, 2019
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page6;