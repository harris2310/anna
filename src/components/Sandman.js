import React from 'react';
import AnimatedPage from './AnimatedPage';
import blueDudeURL from '../collages/blue_dude.jpg';
import handURL from '../collages/hand.jpg';
import darkScaryURL from '../collages/dark_scary.jpg';
import metamorphosisURL from '../collages/metamorphosis.jpg';

const Sandman = () => (
  <AnimatedPage>
    <div className="collages-container">
      <div className="collages-grid">
        <div className="col">
          <div className="col-1-flex">
            <div className="collage">
              <img src={blueDudeURL} alt="Collage" />
            </div>
            <div className="collage">
              <img src={metamorphosisURL} alt="Astronaut collage" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col-2-flex">
            <div className="collage">
              <img src={handURL} alt="Tarrot collage" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col-3-flex">
            <div className="collage">
              <img src={darkScaryURL} alt="Tarrot collage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </AnimatedPage>
);

export default Sandman;
