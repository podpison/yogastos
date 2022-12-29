import { initializeApp } from "firebase/app";
import { addDoc, collection, collection as fbCollection, getDocs, getFirestore, initializeFirestore } from "firebase/firestore";
import { ContactUsFormValuesType } from "./components/pages/contactUs/ContactUsForm/ContactUsForm";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig)
const fs = initializeFirestore(app, {
  experimentalForceLongPolling: true
})


export const itemsAPI = {
  get: async (collection: string) => {
    const itemsSnapshot = await getDocs(fbCollection(fs, collection));
    return itemsSnapshot.docs.map(d => d.data());
  },
};

export const customersAPI = {
  add: async (data: ContactUsFormValuesType) => {
    const docRef = await addDoc(collection(fs, "contactUs"), data);
    return !!docRef;
  }
}