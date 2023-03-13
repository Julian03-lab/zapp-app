import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../api/firebase/firebaseInit'

export default async function createDeck (uid, name, color) {
  const data = {
    name,
    color,
    cards: [],
    createdAt: Timestamp.fromDate(new Date())
  }

  const collectionRef = collection(db, 'users', uid, 'decks')

  try {
    await addDoc(collectionRef, data)
  } catch (error) {
    console.log(error)
  }
}
