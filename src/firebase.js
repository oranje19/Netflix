// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDuLmrZFJH9on6TycxsDLdpDjNuclCGaX8",
    authDomain: "netflix-clone-app-872e8.firebaseapp.com",
    projectId: "netflix-clone-app-872e8",
    storageBucket: "netflix-clone-app-872e8.appspot.com",
    messagingSenderId: "84980181526",
    appId: "1:84980181526:web:9eb8123963476db343a337",
    measurementId: "G-0YCVMW99F4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;