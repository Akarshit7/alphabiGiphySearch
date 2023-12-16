import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "alphabi-4fde7.appspot.com",
  messagingSenderId: "15542647994",
  appId: "1:15542647994:web:99fdbc84fa919b61865683",
  measurementId: "G-KZW9JLQQ0S"
};


export const app = initializeApp(firebaseConfig);



