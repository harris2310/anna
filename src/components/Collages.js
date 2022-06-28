import React from 'react';
import { Link } from 'react-router-dom';
import tarrot1URL from '../collages/tarrot1-edit.png';
import darkScaryURL from '../collages/dark_scary.jpg';
import metamorphosisURL from '../collages/metamorphosis.jpg';
import nightcollageURL from '../collages/night-collage.png';
import pinkFlowerURL from '../collages/pink_flower.jpg';
import deepBlueURL from '../collages/deep_blue.jpg';
import astronautURL from '../collages/astronaut_1.jpg';

const Collages = () => (
  <div className="collages-container">
    <div className="collages-grid">
      <div className="col">
        <div className="col-1-flex">
          <Link to="/tarrot">
            <div className="collage-container">
              <img src={tarrot1URL} className="collage" alt="tarrot 1" />
              <div className="collage-overlay">
                <div className="text">Tarrot</div>
              </div>
            </div>
          </Link>
          <div>
            <img src={metamorphosisURL} className="collage" alt="Metamorphosis" />
          </div>
          <Link to="/night">
            <img src={nightcollageURL} className="collage" alt="Night Collage" />
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="col-2-flex">
          <Link to="/astronaut">
            <div className="collage-container">
              <img src={astronautURL} className="collage" alt="Astronaut" />
              <div className="collage-overlay">
                <div className="text">Astronaut</div>
              </div>
            </div>
          </Link>
          <Link to="/sandman">
            <div className="collage-container">
              <img src={pinkFlowerURL} className="collage" alt="tarrot 3" />
              <div className="collage-overlay">
                <div className="text">Τhe Endless [Sandman tribute]</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="col-3-flex">
          <div className="collage">
            <img src={darkScaryURL} alt="tarrot 2" />
          </div>
          <div className="collage">
            <img src={deepBlueURL} alt="tarrot 2" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Collages;
