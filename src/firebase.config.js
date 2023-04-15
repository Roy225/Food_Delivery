import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2frFH7zJ3G--ntcRbEaUzBFA542JmAj8",
  authDomain: "fooddelivery-27448.firebaseapp.com",
  databaseURL: "https://fooddelivery-27448-default-rtdb.firebaseio.com",
  projectId: "fooddelivery-27448",
  storageBucket: "fooddelivery-27448.appspot.com",
  messagingSenderId: "389904105644",
  appId: "1:389904105644:web:ef6288a1ec90716df91f09"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
