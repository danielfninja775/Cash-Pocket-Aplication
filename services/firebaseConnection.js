import firebase from "firebase";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyC678PbvIFWfYceucntxx81DmQgsrThZMI",
  authDomain: "money-97647.firebaseapp.com",
  databaseURL: "https://money-97647-default-rtdb.firebaseio.com/",
  projectId: "money-97647",
  storageBucket: "money-97647.appspot.com",
  messagingSenderId: "844627764073",
  appId: "1:844627764073:web:4bde196c6b2cdc3a24d3f8",
  measurementId: "G-5JB1WKPPYZ"
};

if (!firebase.apps.length){
   firebase.initializeApp(firebaseConfig);
}
export default firebase;


