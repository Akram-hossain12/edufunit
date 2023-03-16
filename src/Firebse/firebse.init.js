// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCatWn09ZgNHhO-9x6za76z9o9_hYYH_-E",
  authDomain: "edufunit-client.firebaseapp.com",
  projectId: "edufunit-client",
  storageBucket: "edufunit-client.appspot.com",
  messagingSenderId: "628529114496",
  appId: "1:628529114496:web:5dbd1ad8173206ae31a565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;