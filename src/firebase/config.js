import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA1NjJCxsdSMyCqpAFZJJjtFeBagfLyw14',
  authDomain: 'virtual-flux-244019.firebaseapp.com',
  projectId: 'virtual-flux-244019',
  storageBucket: 'virtual-flux-244019.appspot.com',
  messagingSenderId: '837921678836',
  appId: '1:837921678836:web:074f6af9445a81e0bb85a1',
  measurementId: 'G-MDD8BQJBR0',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
