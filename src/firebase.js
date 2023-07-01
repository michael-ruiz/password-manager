import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import data from "./firebaseConfig.json";

const firebaseConfig = {
  apiKey: data.apiKey,
  authDomain: data.authDomain,
  databaseURL: data.databaseURL,
  projectId: data.projectId,
  storageBucket: data.storageBucket,
  messagingSenderId: data.messagingSenderId,
  appId: data.appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;