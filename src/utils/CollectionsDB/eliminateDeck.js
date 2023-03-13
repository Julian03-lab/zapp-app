import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../api/firebase/firebaseInit'

export default async function deleteDeck (collectionId, uid) {
  const collectionRef = doc(db, 'users', uid, 'decks', collectionId)
  await deleteDoc(collectionRef)
}
