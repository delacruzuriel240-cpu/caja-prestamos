import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD0b-prR0-5GgcF9GevAb-fxWitpAV2c",
  authDomain: "caja-prestamos.firebaseapp.com",
  projectId: "caja-prestamos",
  storageBucket: "caja-prestamos.firebasestorage.app",
  messagingSenderId: "179407826234",
  appId: "1:179407826234:web:a3a41c086bb2fde50e1"
};

const app = initializeApp(firebaseConfig);

export default app;
