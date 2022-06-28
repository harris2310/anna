import React from 'react';
import tarrot1URL from '../collages/tarrot1-edit.png';
import tarrot2URL from '../collages/tarrot2-edit.png';
import tarrot3URL from '../collages/tarrot3-edit.png';
import tarrot4URL from '../collages/tarrot4-edit.png';

const Tarrot = () => (
  <div className="collages-container">
    <div className="collages-grid">
      <div className="col">
        <div className="col-1-flex">
          <div className="collage">
            <img src={tarrot1URL} alt="Tarrot collage" />
          </div>
          <div className="collage">
            <img src={tarrot2URL} alt="Tarrot collage" />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="col-2-flex">
          <div className="collage">
            <img src={tarrot4URL} alt="Tarrot collage" />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="col-3-flex">
          <div className="collage">
            <img src={tarrot3URL} alt="Tarrot Collage" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Tarrot;
