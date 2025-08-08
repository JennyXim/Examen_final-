import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Credenciales de configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBWFYzJKS4PRZvODO4WmfJ9q5zdpFv7WA4",
  authDomain: "frutasmjj.firebaseapp.com",
  projectId: "frutasmjj",
  storageBucket: "frutasmjj.firebasestorage.app",
  messagingSenderId: "711346353105",
  appId: "1:711346353105:web:ed5615d6d55d79330f66f0",
  measurementId: "G-9S1HQ20RGF"
};

const app = initializeApp(firebaseConfig);

// El servicio de autenticación
const auth = getAuth(app);
// El servicio de base de datos (Firestore)
const db = getFirestore(app);

// Exporta los servicios para que puedan ser utilizados en otros archivos
export { auth, db };