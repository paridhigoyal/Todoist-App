import firebase from 'firebase';
import 'firebase/firestore';
// const firebaseConfig = {
//     apiKey: "AIzaSyCmwqnkaLo7YxiLUpriyhMImgDPcBMzmIU",
//     authDomain: "todoist-app-ff841.firebaseapp.com",
//     databaseURL: "https://todoist-app-ff841.firebaseio.com",
//     projectId: "todoist-app-ff841",
//     storageBucket: "todoist-app-ff841.appspot.com",
//     messagingSenderId: "57928828072",
//     appId: "1:57928828072:web:fd36bd8530ae8c0322ae9d"
//   };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCmwqnkaLo7YxiLUpriyhMImgDPcBMzmIU",
    authDomain: "todoist-app-ff841.firebaseapp.com",
    databaseURL: "https://todoist-app-ff841.firebaseio.com",
    projectId: "todoist-app-ff841",
    storageBucket: "todoist-app-ff841.appspot.com",
    messagingSenderId: "57928828072",
    appId: "1:57928828072:web:fd36bd8530ae8c0322ae9d"
   });
//   firebase.initializeApp(firebaseApp);npm 
  const db=firebaseApp.firestore();
  export default db;

//   export {firebaseConfig as firebase} ;