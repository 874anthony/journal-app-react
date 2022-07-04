// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyByToc3kcJIWQKMBpMDbVSRoGeSQDHkPOU',
  authDomain: 'login-app-c4c26.firebaseapp.com',
  databaseURL: 'https://login-app-c4c26.firebaseio.com',
  projectId: 'login-app-c4c26',
  storageBucket: 'login-app-c4c26.appspot.com',
  messagingSenderId: '596092183727',
  appId: '1:596092183727:web:bd302590979a0a7a81a05a',
  measurementId: 'G-LV4WY00KC4',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
