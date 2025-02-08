import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 

 
const firebaseConfig = {
  apiKey: "AIzaSyCcEf6Jr2cgdOa0VcchrxCLYblZznwNacs",
  authDomain: "glamconnect-41408.firebaseapp.com",
  projectId: "glamconnect-41408",
  storageBucket: "glamconnect-41408.firebasestorage.app",
  messagingSenderId: "30806568854",
  appId: "1:30806568854:web:ea7ef761177e298ca177b7",
  measurementId: "G-YXBDWN3P2Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app); 

const storage = getStorage(app);  

export { storage };