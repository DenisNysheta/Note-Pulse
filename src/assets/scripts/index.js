import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";

const fireBaseApp = initializeApp({

})

const auth = getAuth(fireBaseApp)
const db = getFirestore(fireBaseApp)
db
const todosCol = collection( db, "todos")
const snapshot = await getDocs(todosCol)

onAuthStateChanged( auth, user => {
    if(user != null) {
        console.log("logged in")
    } else {
        console.log("No user")
    }
})