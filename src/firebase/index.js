import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAJ41-bDhbQSA7cw8JG8s9Neg87WAg8nqs",
  authDomain: "yanninvitation.firebaseapp.com",
  projectId: "yanninvitation",
  storageBucket: "yanninvitation.appspot.com",
  messagingSenderId: "76073141883",
  appId: "1:76073141883:web:fc63adbd45a781d58244de"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage };