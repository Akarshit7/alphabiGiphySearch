// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU0FCroDLAcmjSI0yDLEI0NsK7IJJEDdU",
  authDomain: "alphabi-4fde7.firebaseapp.com",
  projectId: "alphabi-4fde7",
  storageBucket: "alphabi-4fde7.appspot.com",
  messagingSenderId: "15542647994",
  appId: "1:15542647994:web:99fdbc84fa919b61865683",
  measurementId: "G-KZW9JLQQ0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);
export default app;



