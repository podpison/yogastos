import { initializeApp } from "firebase/app";
import { collection as fbCollection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC8ghX839IYCGpQXnvkmLatlFFMpL6mQE",
  authDomain: "yogastos.firebaseapp.com",
  projectId: "yogastos",
  storageBucket: "yogastos.appspot.com",
  messagingSenderId: "78654155477",
  appId: "1:78654155477:web:256c7699c93a92dc41d05c",
  measurementId: "G-BJ84EZGG2K"
};

const app = initializeApp(firebaseConfig);
const fs = getFirestore(app);


export const itemsAPI = {
  get: async (collection: string) => {
    const itemsSnapshot = await getDocs(fbCollection(fs, collection));
    return itemsSnapshot.docs.map(d => d.data());
  },
};