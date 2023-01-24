import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOfKUSKTNuly26LryRgfE3C0RyjQLby5s",
    authDomain: "curso-23eb1.firebaseapp.com",
    projectId: "curso-23eb1",
    storageBucket: "curso-23eb1.appspot.com",
    messagingSenderId: "755359152230",
    appId: "1:755359152230:web:4d50d7ad0a46d4538315a7",
    measurementId: "G-G6Z5NKG72G"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  export { db };