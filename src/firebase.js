
// import firebase from 'firebase';
// // import { initializeApp } from "firebase/app";
// // // import { getStorage } from "firebase/storage";
// // import { getAuth} from "firebase/auth";
// // // import { getAuth, GoogleAuthProvider } from "firebase/auth";
// // import { getFirestore } from "firebase/firestore/lite";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDbHkm3u5JZLWs0f1hWjw5UdKwl--nAK1I",
//     authDomain: "whatsapp-clone-332717.firebaseapp.com",
//     projectId: "whatsapp-clone-332717",
//     storageBucket: "whatsapp-clone-332717.appspot.com",
//     messagingSenderId: "1089485782592",
//     appId: "1:1089485782592:web:30d823046fc6ecb1e629a5",
//     measurementId: "G-MYQXQMZC4W"
//   };

//   const app = firebase.initializeApp(firebaseConfig)
// const db = getFirestore(app);
// const auth = getAuth();
// // const storage = getStorage(app);
//   const provider = new firebase.auth.GoogleAuthProvider();

//   export default db;
//   export {auth,provider};


  
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/firestore';
import 'firebase/compat/storage';
// import { getFirestore } from "firebase/firestore/lite";
// import { initializeApp } from "firebase/app";
// // import { getStorage } from "firebase/storage";
// import { getAuth} from "firebase/auth";
// // import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore/lite";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDbHkm3u5JZLWs0f1hWjw5UdKwl--nAK1I",
    authDomain: "whatsapp-clone-332717.firebaseapp.com",
    projectId: "whatsapp-clone-332717",
    storageBucket: "whatsapp-clone-332717.appspot.com",
    messagingSenderId: "1089485782592",
    appId: "1:1089485782592:web:30d823046fc6ecb1e629a5",
    measurementId: "G-MYQXQMZC4W"
  };

  const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
// const db = getFirestore(app);
const auth = firebase.auth();
// const storage = getStorage(app);
  const provider = new firebase.auth.GoogleAuthProvider();

  export default db;
  export {auth,provider};
