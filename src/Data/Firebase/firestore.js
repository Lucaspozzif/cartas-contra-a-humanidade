import { useEffect, useState } from "react"
import {collection, getDocs} from 'firebase/firestore'

import {db} from './firebase'


export function FirestoreCollection(colName) {
    const [list, setList] = useState()
    useEffect(() => {
        const getList = async () => {
            const data = await getDocs(collection(db, colName))
            setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        if (!list) getList()
    })
    return list
}