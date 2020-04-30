  import firebase from 'firebase';
//   import firestore from 'firebase/firestore';
//   import auth from 'firebase/auth';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAK3f_kkCNsxbQbTfdB13DaWyj5oxmN5hs",
    authDomain: "spa-psm.firebaseapp.com",
    databaseURL: "https://spa-psm.firebaseio.com",
    projectId: "spa-psm",
    storageBucket: "spa-psm.appspot.com",
    messagingSenderId: "589532256421",
    appId: "1:589532256421:web:cf1efef23cd567e180554c"
  };
  // Initialize Firebase
  const db = firebase.initializeApp(firebaseConfig);

  export default {
    firestore: db.firestore(), 
    auth: db.auth(),
    storage: db.storage()
  } 
  
