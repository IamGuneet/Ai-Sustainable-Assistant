
import {initializeApp} from 'firebase/app';
import {getStorage} from "firebase/storage"
// Replace with your Firebase project's configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiPSt65zrgiCaDO2XvUcCtzHtK0kzKNLU",
    authDomain: "gitamlostnfound.firebaseapp.com",
    projectId: "gitamlostnfound",
    storageBucket: "gitamlostnfound.appspot.com",
    messagingSenderId: "725308759760",
    appId: "1:725308759760:web:4c951d861010d4468e08d5"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const storage = getStorage(app)