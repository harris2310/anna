import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Carousel from 'react-multi-carousel';
import Zoom from 'react-medium-image-zoom';
import { CustomLeftArrow, CustomRightArrow } from './CustomArrows';
import 'react-medium-image-zoom/dist/styles.css';
import 'react-multi-carousel/lib/styles.css';
import collage1URL from '../collages/tarrot1-edit.png';
import collage2URL from '../collages/tarrot2-edit.png';
import collage3URL from '../collages/tarrot3-edit.png';
import collage4URL from '../collages/tarrot4-edit.png';

const Main = () => (
  <div className="tarrot">
    <div className="arcana-text">
      Major Arcana
    </div>
    <Carousel
      showThumbs={false}
      selectedItem={1}
      swipable
      infinite
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      keyBoardControl
      className="tarrot-cards"
      centerMode={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
    >
      <div className="tarrot-1-container">
        <Zoom overlayBgColorEnd="#3d566f">
          <img src={collage1URL} alt="collage-1" />
        </Zoom>
      </div>
      <div className="tarrot-2-container">
        <Zoom overlayBgColorEnd="#3d566f">
          <img src={collage2URL} alt="collage-1" />
        </Zoom>
      </div>
      <div className="tarrot-3-container">
        <Zoom overlayBgColorEnd="#3d566f">
          <img src={collage3URL} alt="collage-1" />
        </Zoom>
      </div>
      <div className="tarrot-4-container">
        <Zoom overlayBgColorEnd="#3d566f">
          <img src={collage4URL} alt="collage-1" />
        </Zoom>
      </div>
    </Carousel>
  </div>
);

export default Main;
