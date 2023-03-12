import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../api/firebase/firebaseInit'

export default function readDecks (uid, callback) {
  const data = collection(db, 'users', uid, 'decks')
  return onSnapshot(query(data, orderBy('createdAt', 'desc')), (querySnapshot) => {
    querySnapshot.empty && callback(null)
    const newDecks = querySnapshot.docs.map(doc => {
      const data = doc.data()
      const id = doc.id
      return { id, ...data }
    })
    callback(newDecks)
  })
}
