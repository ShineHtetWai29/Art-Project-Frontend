
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBEkWVbESQWv7C5gjTSidofbL_fIfAxDUU",
  authDomain: "uploadingfile-d6ac0.firebaseapp.com",
  projectId: "uploadingfile-d6ac0",
  storageBucket: "uploadingfile-d6ac0.appspot.com",
  messagingSenderId: "98324421287",
  appId: "1:98324421287:web:0d94f0c2154f4d60079982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
