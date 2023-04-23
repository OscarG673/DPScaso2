import firebase from "firebase/compat"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFbMhjifmiuSMgvl1GUQpYCgSHzWr9Qoc",
  authDomain: "reactapp-be8fb.firebaseapp.com",
  databaseURL: "https://reactapp-be8fb-default-rtdb.firebaseio.com",
  projectId: "reactapp-be8fb",
  storageBucket: "reactapp-be8fb.appspot.com",
  messagingSenderId: "977031982509",
  appId: "1:977031982509:web:ac4345a0b973d877c04524"
};

let app;

if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };