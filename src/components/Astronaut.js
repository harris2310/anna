import React from 'react';
import astronaut1URL from '../collages/astronaut_1.jpg';
import astronaut2URL from '../collages/astronaut_2.jpg';
import AnimatedPage from './AnimatedPage';
import Zoom from 'react-medium-image-zoom';

const Astronaut = () => (
  <AnimatedPage>
    <div className="collages-container">
      <div className="collages-grid">
        <div>
          <div className="collage">
            <Zoom overlayBgColorEnd="#3d566f">
              <img src={astronaut1URL} alt="Astronaut collage" />
            </Zoom>
          </div>
        </div>
        <div>
          <div className="collage">
            <Zoom overlayBgColorEnd="#3d566f">
              <img src={astronaut2URL} alt="Tarrot collage" />
            </Zoom>
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
