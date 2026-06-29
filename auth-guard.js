// auth-guard.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCU-KBtj7vx3OouofytlwIN3KPd1McNlEk",
  authDomain: "vantex-admin-2026.firebaseapp.com",
  databaseURL: "https://vantex-admin-2026-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vantex-admin-2026",
  storageBucket: "vantex-admin-2026.firebasestorage.app",
  messagingSenderId: "810884502320",
  appId: "1:810884502320:web:b8ba7c2909ddf4ccf02ef5"
};

const ALLOWED_EMAILS = ["avogodans61@gmail.com"];

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user || !ALLOWED_EMAILS.includes((user.email||'').toLowerCase())) {
    window.location.href = './login.html';
  }
});
