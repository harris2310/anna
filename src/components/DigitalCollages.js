/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import tarrot1URL from '../collages/Tarrot/tarrot1-edit.webp';
import xroniaNustaURL from '../collages/xronia_nusta.jpg';
import redURL from '../collages/Red-Blue-Yellow/week 28INSTA.png';
import nightcollageURL from '../collages/night-collage.png';
import pinkFlowerURL from '../collages/pink_flower.jpg';
import blueDudeURL from '../collages/week40insta.jpg';
import deepBlueURL from '../collages/deep_blue.jpg';
import astronautURL from '../collages/astronaut_1.jpg';
import pastelURL from '../collages/Pastel Apocalypse/week 41 1insta.jpg';
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
            <Link to="/red-blue-yellow">
              <div className="collage-container">
                <img src={redURL} className="collage" alt="Red Blue Yellow" />
                <div className="collage-overlay">
                  <div className="text">Red Blue Yellow</div>
                </div>
              </div>
            </Link>
            <Link to="/pastel-apocalypse">
              <div className="collage-container">
                <img src={pastelURL} className="collage" alt="Pastel Apocalypse" />
                <div className="collage-overlay">
                  <div className="text">Pastel Apocalypse</div>
                </div>
              </div>
            </Link>
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
                <img src={blueDudeURL} className="collage" alt="the endless" />
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
            <Link to="/music-homages">
              <div className="collage-container">
                <img src={deepBlueURL} className="collage" alt="Music Homages" />
                <div className="collage-overlay">
                  <div className="text">Music Homages</div>
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
