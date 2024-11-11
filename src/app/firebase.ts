// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyzEhuQKUzYG0rpI64z0VhGgqthHtNYLI",
  authDomain: "ssdproject-70318.firebaseapp.com",
  databaseURL: "https://ssdproject-70318-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ssdproject-70318",
  storageBucket: "ssdproject-70318.firebasestorage.app",
  messagingSenderId: "511040437765",
  appId: "1:511040437765:web:6a524f0ee7cfeb5c41266c",
  measurementId: "G-NCMBLEECGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };