// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDltfOSoh9p-sqBmK0EvZKzYjfzrGZuiJY",
  authDomain: "genius-car-services-3db70.firebaseapp.com",
  projectId: "genius-car-services-3db70",
  storageBucket: "genius-car-services-3db70.appspot.com",
  messagingSenderId: "818450902358",
  appId: "1:818450902358:web:59066f307455cbac73baf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;