import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDKcb4Mqdny1X1bHC5_vZ_MUyf08lVL-ag",
  authDomain: "allergy-6f2a9.firebaseapp.com",
  projectId: "allergy-6f2a9",
  storageBucket: "allergy-6f2a9.appspot.com",
  messagingSenderId: "1004642727087",
  appId: "1:1004642727087:web:2b4587c7ed31deb8b6d05a",
  measurementId: "G-89DER7TMCC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; 