import { useState, useEffect } from 'react'
import { auth } from '../../api/firebase/firebaseInit'
import { onAuthStateChanged } from 'firebase/auth'

export default function useAuth () {
  const [user, setUser] = useState()

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(undefined)
      }
    })

    return unsubscribeFromAuthStatuChanged
  }, [])

  return (
    user
  )
}
