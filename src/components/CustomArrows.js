import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import '../css/style.css';

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button className="custom-right-arrow" onClick={() => onClick()} />;
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button className="custom-left-arrow" onClick={() => onClick()} />;
};

export { CustomLeftArrow, CustomRightArrow };
