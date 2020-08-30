import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAeVdaCuJ5iSb9pDHkzWMttEMZokxInVhw",
  authDomain: "hi-fast-db.firebaseapp.com",
  databaseURL: "https://hi-fast-db.firebaseio.com",
  projectId: "hi-fast-db",
  storageBucket: "hi-fast-db.appspot.com",
  messagingSenderId: "227846091360",
  appId: "1:227846091360:web:da2ed4f7a0749211c10905",
  measurementId: "G-Z4S753L1RF",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
