/* ============================================================
   CODING DIRECTOR — Firebase Configuration
   ============================================================

   SETUP INSTRUCTIONS (takes ~5 minutes):

   STEP 1: Create a Firebase project
     → https://console.firebase.google.com/
     → Click "Add project" → name it (e.g. "coding-director")
     → Disable Google Analytics (optional) → Create project

   STEP 2: Register a Web App
     → In Firebase console, click the </> Web icon
     → Register app (nickname: "coding-director-web")
     → Copy the firebaseConfig object shown and paste below

   STEP 3: Enable Authentication
     → Build → Authentication → Get Started
     → Sign-in method tab → Enable:
         ✓ Google (click Enable, add support email, Save)
         ✓ Email/Password (enable, Save)

   STEP 4: Add localhost to Authorized Domains
     → Authentication → Settings → Authorized domains
     → Add Domain → type "localhost" → Add
     → (Also add "127.0.0.1" for safety)
     NOTE: Open index.html through a local server (e.g. VS Code
     Live Server, or run: npx http-server .) — Google sign-in
     does NOT work on file:// protocol.

   STEP 5: Create a Firestore Database
     → Build → Firestore Database → Create database
     → Start in test mode → choose region → Enable

   STEP 6: Replace the placeholder values below with your config

   ============================================================ */

const firebaseConfig = {
  apiKey:            "AIzaSyDYirC27kapVYasavCbnUPzjD5ROv5n-6k",
  authDomain:        "coding-director.firebaseapp.com",
  projectId:         "coding-director",
  storageBucket:     "coding-director.firebasestorage.app",
  messagingSenderId: "821817467043",
  appId:             "1:821817467043:web:ec1bd2050a79cf07fcdf16",
  measurementId:     "G-N1880F1837",
};

/*
  EXAMPLE (replace with your own values):

  const firebaseConfig = {
    apiKey:            "AIzaSyAbc123...",
    authDomain:        "my-coding-director.firebaseapp.com",
    projectId:         "my-coding-director",
    storageBucket:     "my-coding-director.appspot.com",
    messagingSenderId: "123456789",
    appId:             "1:123456789:web:abc123...",
  };
*/
