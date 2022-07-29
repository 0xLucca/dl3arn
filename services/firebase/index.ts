import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const config: FirebaseOptions = {
  appId: "1:896212070319:web:fb0f83cfd29b0ddcbdc95a",
  apiKey: "AIzaSyBSy-vLLlri3-rPXqZGaeZnfKjtS3pzhYo",
  authDomain: "dev-dl3arn.firebaseapp.com",

  projectId: "dev-dl3arn",
  storageBucket: "dev-dl3arn.appspot.com",
  messagingSenderId: "896212070319",

  databaseURL: "https://dev-dl3arn.firebaseio.com",
};

export const app = initializeApp(config);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
export default app;
