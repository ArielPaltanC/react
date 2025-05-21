// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeBb02p-CP9OL-RgFQqEcU0yBWFLnfJZo",
  authDomain: "proyectoreact-be85c.firebaseapp.com",
  projectId: "proyectoreact-be85c",
  storageBucket: "proyectoreact-be85c.firebasestorage.app",
  messagingSenderId: "785192355969",
  appId: "1:785192355969:web:64e136a3bc55c1f60de580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;