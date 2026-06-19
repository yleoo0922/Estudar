import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlSwMiKfuKusL1vEvpsxYzulA4KlLoqCE",
  authDomain: "estudar-tutor.firebaseapp.com",
  projectId: "estudar-tutor",
  storageBucket: "estudar-tutor.firebasestorage.app",
  messagingSenderId: "1006786778303",
  appId: "1:1006786778303:web:b9aa20b4ce8a9b255b220a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
