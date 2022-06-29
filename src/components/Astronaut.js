import React from 'react';
import astronaut1URL from '../collages/astronaut_1.jpg';
import astronaut2URL from '../collages/astronaut_2.jpg';
import AnimatedPage from './AnimatedPage';

const Astronaut = () => (
  <AnimatedPage>
    <div className="collages-container">
      <div className="collages-grid">
        <div className="col">
          <div className="col-1-flex">
            <div className="collage">
              <img src={astronaut1URL} alt="Astronaut collage" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col-2-flex">
            <div className="collage">
              <img src={astronaut2URL} alt="Tarrot collage" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col-3-flex">
          </div>
        </div>
      </div>
    </div>
  </AnimatedPage>
);

export default Astronaut;
