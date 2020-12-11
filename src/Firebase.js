import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBZsXFdwn0NjSH8_VliG2Ah4CP73NNfEM0",
    authDomain: "vs-slack-app.firebaseapp.com",
    projectId: "vs-slack-app",
    storageBucket: "vs-slack-app.appspot.com",
    messagingSenderId: "23439306883",
    appId: "1:23439306883:web:222ad7ae001e38ac95abb6",
    measurementId: "G-CVY5Y07BHY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;