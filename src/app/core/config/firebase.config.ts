import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// ⚠️ IMPORTANTE: Reemplaza estos valores con tu configuración de Firebase
// Obtén estos valores de tu proyecto en https://console.firebase.google.com
const firebaseConfig = {
  apiKey: "AIzaSyCDOj9BHA076cLFRD2wUf4NLZujHtq_7EI",
  authDomain: "portfolio-c5399.firebaseapp.com",
  projectId: "portfolio-c5399",
  storageBucket: "portfolio-c5399.firebasestorage.app",
  messagingSenderId: "698291542160",
  appId: "1:698291542160:web:63550b1643156d5e7ba015",
  measurementId: "G-L6GV07P1ZY"
};

// Inicializar Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Inicializar servicios
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);
