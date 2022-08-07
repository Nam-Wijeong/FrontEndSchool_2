import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFo_4PhM2VTcFHvoe7c_Jz_h4ofMDBZOQ",
  authDomain: "fireauth-55f91.firebaseapp.com",
  projectId: "fireauth-55f91",
  storageBucket: "fireauth-55f91.appspot.com",
  messagingSenderId: "1069646660509",
  appId: "1:1069646660509:web:6cbde73be2ce7345b76574"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;