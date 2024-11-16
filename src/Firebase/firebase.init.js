// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLRpHrPEM3D1Izl3C8dpsN91-xt9R6Ufw",
  authDomain: "the-dragon-news-f4af6.firebaseapp.com",
  projectId: "the-dragon-news-f4af6",
  storageBucket: "the-dragon-news-f4af6.firebasestorage.app",
  messagingSenderId: "752821010013",
  appId: "1:752821010013:web:168a0fe2c3874e4c78d7b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app