import { async } from "@firebase/util";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../Data/Firebase/firebase";

export function CreateAccount(auth,name) {
    const player = {
        name: name,
        timesPlayed: 0,
        decks: {
            favorite: [],
            used: {}
        }
    }
    const addPlayer = async () => {
        const data = doc(db, 'players',auth.uid)
        setDoc(data, player)
    }
    addPlayer()
}