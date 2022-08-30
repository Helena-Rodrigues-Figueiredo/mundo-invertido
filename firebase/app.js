  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyACnONBGq3aMg70cDmSyF6g05fOwmjgJxA",
    authDomain: "projeto-mundo-invertido-faddd.firebaseapp.com",
    projectId: "projeto-mundo-invertido-faddd",
    storageBucket: "projeto-mundo-invertido-faddd.appspot.com",
    messagingSenderId: "406824191474",
    appId: "1:406824191474:web:aa93abe93023ec76fe576b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app;