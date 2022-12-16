import { initializeApp } from "firebase/app";
import { addDoc, collection, collection as fbCollection, getDocs, getFirestore } from "firebase/firestore";
import { ContactUsFormValuesType } from "./components/pages/contactUs/ContactUsForm/ContactUsForm";

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

export const customersAPI = {
  add: async (data: ContactUsFormValuesType) => {
    const docRef = await addDoc(collection(fs, "contactUs"), data);
    return !!docRef;
  }
}

export const collectionsAPI = {
  add: async (data: Array<object>) => {
    for (let item of data) {
      //@ts-ignore
      let a = await addDoc(collection(fs, "blog"), item);
      console.log(a)
    }
  }
}