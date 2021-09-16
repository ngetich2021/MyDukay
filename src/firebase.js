import firebase from 'firebase/compat'

const config = {
  apiKey: "AIzaSyBCuPZJ81EAU04FUmJSMZWE12jcr6i4HTI",
  
  authDomain: "duka-9d3ee.firebaseapp.com",

  databaseURL: "https://duka-9d3ee-default-rtdb.firebaseio.com",

  projectId: "duka-9d3ee",

  storageBucket: "duka-9d3ee.appspot.com",

  messagingSenderId: "37150047200",

  appId: "1:37150047200:web:5308f729b39ce603364985",

  measurementId: "G-QD3P7W1P1R"
 

}

firebase.initializeApp(config)

export const fire = firebase
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const messaging = firebase.messaging();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();













  