import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyArks_caps5n9G4VcJPrfHNaXxfeiKTNE0",
  authDomain: "attendence-e81f6.firebaseapp.com",
  databaseURL: "https://attendence-e81f6-default-rtdb.firebaseio.com",
  projectId: "attendence-e81f6",
  storageBucket: "attendence-e81f6.appspot.com",
  messagingSenderId: "529405444150",
  appId: "1:529405444150:web:15e2b5236f7dc07ed09897",
  measurementId: "G-P46DGTSWXJ"
};

   // Initialize Firebase
   if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database();