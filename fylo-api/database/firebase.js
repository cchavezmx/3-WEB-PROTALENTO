// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // Your web app's Firebase configuration
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://test-upload-7676a.appspot.com");
const db = getFirestore(app);

export {
  storage,
  db
}