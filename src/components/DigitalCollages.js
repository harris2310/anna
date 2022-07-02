/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import tarrot1URL from '../collages/tarrot1-edit.png';
import xroniaNustaURL from '../collages/xronia_nusta.jpg';
import joanDidionURL from '../collages/african_woman.jpg';
import nightcollageURL from '../collages/night-collage.png';
import pinkFlowerURL from '../collages/pink_flower.jpg';
import blueDudeURL from '../collages/blue_dude.jpg';
import deepBlueURL from '../collages/deep_blue.jpg';
import astronautURL from '../collages/astronaut_1.jpg';
import AnimatedPage from './AnimatedPage';

const DigitalCollages = () => {
  return (
    <AnimatedPage>
      <div className="collages-container">
        <div className="collages-grid">
          <div>
            <Link to="/tarrot">
              <div className="collage-container">
                <img src={tarrot1URL} className="collage" alt="tarrot 1" />
                <div className="collage-overlay">
                  <div className="text">Tarrot</div>
                </div>
              </div>
            </Link>
            <div>
              <div className="collage-container">
                <Zoom overlayBgColorEnd="#3d566f">
                  <img src={joanDidionURL} className="collage" alt="Metamorphosis" />
                  <div className="collage-overlay">
                    <div className="text">Women in Architecture</div>
                  </div>
                </Zoom>
              </div>
            </div>
            <div className="collage">
              <img src={xroniaNustaURL} alt="tarrot 2" />
            </div>
          </div>
          <div>
            <Link to="/astronaut">
              <div className="collage-container">
                <img src={astronautURL} className="collage" alt="Astronaut" />
                <div className="collage-overlay">
                  <div className="text">Astronaut</div>
                </div>
              </div>
            </Link>
            <Link to="/the-endless">
              <div className="collage-container">
                <img src={blueDudeURL} className="collage" alt="Astronaut" />
                <div className="collage-overlay">
                  <div className="text">The Endless</div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/night">
              <img src={nightcollageURL} className="collage" alt="Night Collage" />
            </Link>
            <div className="collage">
              <img src={deepBlueURL} alt="tarrot 2" />
            </div>
            <Link to="/sandman">
              <div className="collage-container">
                <img src={pinkFlowerURL} className="collage" alt="tarrot 3" />
                <div className="collage-overlay">
                  <div className="text">Pink Dude</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default DigitalCollages;
