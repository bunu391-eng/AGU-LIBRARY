// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc5jI9PnnU20pZJSXJTuhHtymfsggt1uI",
  authDomain: "agu-library.firebaseapp.com",
  projectId: "agu-library",
  storageBucket: "agu-library.firebasestorage.app",
  messagingSenderId: "969800723146",
  appId: "1:969800723146:web:6faa6874dfdb052e172233"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);