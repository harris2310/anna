/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react';
import {
  ref,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

const useStorage = (imagesListRef) => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return imageUrls;
};


export default useStorage;
