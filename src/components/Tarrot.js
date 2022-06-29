import React from 'react';
import AnimatedPage from './AnimatedPage';
import tarrot1URL from '../collages/tarrot1-edit.png';
import tarrot2URL from '../collages/tarrot2-edit.png';
import tarrot3URL from '../collages/tarrot3-edit.png';
import tarrot4URL from '../collages/tarrot4-edit.png';

const Tarrot = () => (
  <AnimatedPage>
    <div className="collages-container">
      <div className="collages-grid">
        <div>
          <div className="collage">
            <img src={tarrot1URL} alt="Tarrot collage" />
          </div>
          <div className="collage">
            <img src={tarrot2URL} alt="Tarrot collage" />
          </div>
        </div>
        <div>
          <div className="collage">
            <img src={tarrot4URL} alt="Tarrot collage" />
          </div>
        </div>
        <div>
          <div className="collage">
            <img src={tarrot3URL} alt="Tarrot Collage" />
          </div>
        </div>
      </div>
    </div>
  </AnimatedPage>
);

export default Tarrot;
