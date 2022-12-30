
 import { initializeApp } from "firebase/app";
 import{getAuth} from "firebase/auth"
 import {getFirestore} from 'firebase/firestore'
 import {getStorage} from 'firebase/storage'
 

 const firebaseConfig = {
   apiKey: "AIzaSyBUAiwsGitEH_x9AGliYhItOvvKZ87AHS0",
   authDomain: "masplantas-e25bb.firebaseapp.com",
   projectId: "masplantas-e25bb",
   storageBucket: "masplantas-e25bb.appspot.com",
   messagingSenderId: "824593957760",
   appId: "1:824593957760:web:75249c01da4067662df765"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth= getAuth(app)
 export const db= getFirestore(app)
 export const storage= getStorage(app)

 export default  app