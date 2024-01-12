// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, updateDoc, doc, getDocs, deleteDoc,onSnapshot } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  apiKey: "AIzaSyDgRyPhMiFccbbpKywtIJNkLMOo3nM3ixI",
  authDomain: "quizapp-142ca.firebaseapp.com",
  projectId: "quizapp-142ca",
  storageBucket: "quizapp-142ca.appspot.com",
  messagingSenderId: "866856990065",
  appId: "1:866856990065:web:47eedd66899b441ad6f2d0",
  measurementId: "G-4FX5SK5N0L"
};


const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const db = getFirestore(app);
const memberListCollection = collection(db, 'memberList'); 

const addDocument = async (collectionRef, data) => {
    try {
      const docRef = await addDoc(collectionRef, data);
      console.log('Document written with ID: ', docRef.id);
      return docRef;
    } catch (e) {
      console.error('Error adding document: ', e);
      throw e;
    }
  };
  
  const updateDocument = async (documentRef, data) => {
    try {
      await updateDoc(documentRef, data);
    } catch (e) {
      console.error('Error updating document: ', e);
      throw e;
    }
  };
  
  const deleteDocument = async (documentRef) => {
    try {
      await deleteDoc(documentRef);
    } catch (e) {
      console.error('Error deleting document: ', e);
      throw e;
    }
  };
  export {
    db,
    memberListCollection,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    addDocument,
    updateDocument,
    deleteDocument,
    getDocs,
    doc,
    onSnapshot,
    addDoc,
     // Burada doc fonksiyonunu ekleyin
  };