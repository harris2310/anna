import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const useFirestore = (col) => {
  const [docs, setDocs] = useState([]);

  useEffect(async () => {
    const snapShot = await getDocs(collection(db, col));
    const documents = [];
    snapShot.forEach((doc) => {
      setDocs(doc.data());
    });
    console.log(docs);
    return docs;
  });
};

export default useFirestore;
