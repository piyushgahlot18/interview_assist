
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBAlJ4SM043R6LH-LnLR19pfAEOuMUWtmk",
  authDomain: "interview-assistant-e94df.firebaseapp.com",
  projectId: "interview-assistant-e94df",
  storageBucket: "interview-assistant-e94df.firebasestorage.app",
  messagingSenderId: "265984782493",
  appId: "1:265984782493:web:0262312bb74e7f04d76474",
  measurementId: "G-FW5Q9BHND6"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}