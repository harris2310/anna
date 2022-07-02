/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import {
  ref,
} from 'firebase/storage';
import Zoom from 'react-medium-image-zoom';
import { storage } from '../firebase/config';
import useStorage from '../hooks/useStorage';
import AnimatedPage from './AnimatedPage';

const TheEndless = () => {
  const imagesListRef = ref(storage, 'images/The Endless');
  const imageUrls = useStorage(imagesListRef);

  return (
    <AnimatedPage>
      <div className="collages-container">
        <div className="collages-grid">
          {imageUrls.map((url) => {
            return (
              <div className="collage">
                <Zoom overlayBgColorEnd="#3d566f">
                  <img src={url} />
                </Zoom>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default TheEndless;
