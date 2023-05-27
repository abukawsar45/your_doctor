// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyASrmPH3f-8ULT9EKvaonRLVEKTFCRWorM',
  authDomain: 'car-doctor-crud-ddc53.firebaseapp.com',
  projectId: 'car-doctor-crud-ddc53',
  storageBucket: 'car-doctor-crud-ddc53.appspot.com',
  messagingSenderId: '898829534930',
  appId: '1:898829534930:web:e252bd7f44731b2c83cf0b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;