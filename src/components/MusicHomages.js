import React from 'react';
import useStorage from '../hooks/useStorage';
import {
  ref,
} from 'firebase/storage';
import { storage } from "../firebase/config";
import Zoom from 'react-medium-image-zoom';
import AnimatedPage from './AnimatedPage';

const RedBlueYellow = () => {
  const imagesListRef = ref(storage, 'images/Music Homages');
  const imageUrls = useStorage(imagesListRef);

  return (
    <AnimatedPage>
      <div className="collages-container">
        <div className="collages-grid">
          {imageUrls.map((url) => {
            return (
              <div className="collage">
                <Zoom overlayBgColorEnd="#3d566f">
                  <img alt="Music Homeage Collage" src={url} />
                </Zoom>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default RedBlueYellow;
