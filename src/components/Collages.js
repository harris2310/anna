import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Carousel from 'react-multi-carousel';
import { CustomLeftArrow, CustomRightArrow } from './CustomArrows';
import 'react-multi-carousel/lib/styles.css';
import collage1URL from '../collages/tarrot1.png';
import collage2URL from '../collages/tarrot2.png';
import collage3URL from '../collages/tarrot3.png';
import collage4URL from '../collages/tarrot4.png';

const Collages = (props) => (
  <div className="tarrot">
    <div className="arcana-text">
      Major Arcana
    </div>
    <Carousel
      showThumbs={false}
      selectedItem={1}
      swipable
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
        <img src={collage1URL} alt="collage-1" />
      </div>
      <div className="tarrot-2-container">
        <img src={collage2URL} alt="collage-1" />
      </div>
      <div className="tarrot-3-container">
        <img src={collage3URL} alt="collage-1" />
      </div>
      <div className="tarrot-4-container">
        <img src={collage4URL} alt="collage-1" />
      </div>
    </Carousel>
  </div>
);

export default Collages;
