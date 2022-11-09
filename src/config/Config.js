import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBUAiwsGitEH_x9AGliYhItOvvKZ87AHS0",
    authDomain: "masplantas-e25bb.firebaseapp.com",
    projectId: "masplantas-e25bb",
    storageBucket: "masplantas-e25bb.appspot.com",
    messagingSenderId: "824593957760",
    appId: "1:824593957760:web:75249c01da4067662df765"
  };


  firebase.initializeApp(firebaseConfig)

  const auth= firebase.auth();
  const db = firebase.firestore();

  const storage = firebase.storage();
  export{auth,db, storage}
  