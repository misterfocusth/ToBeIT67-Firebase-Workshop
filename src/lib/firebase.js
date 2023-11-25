// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABwfeAQLkBD9Hg45spBfExLLz4kshPu3U",
    authDomain: "tobe67-firebase-ws-test.firebaseapp.com",
    projectId: "tobe67-firebase-ws-test",
    storageBucket: "tobe67-firebase-ws-test.appspot.com",
    messagingSenderId: "508572037474",
    appId: "1:508572037474:web:0da7a048c4445849b93c3b"
};

// Initialize Firebase
let app;

if (!getApps().length) app = initializeApp(firebaseConfig);

export default app;