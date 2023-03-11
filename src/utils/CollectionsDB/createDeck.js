import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../api/firebase/firebaseInit'

export default async function createDeck (uid, name, color) {
  const data = {
    name,
    color,
    cards: []
  }

  const collectionRef = collection(db, 'users', uid, 'decks')

  try {
    const docRef = await addDoc(collectionRef, data)
    console.log('Document written with ID: ', docRef.id)
  } catch (error) {
    console.log(error)
  }
}