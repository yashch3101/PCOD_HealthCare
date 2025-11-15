import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkly3oUqREytwJvjccs8FWlhGWAzr9p2s",
  authDomain: "shehelp-hack.firebaseapp.com",
  projectId: "shehelp-hack",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
