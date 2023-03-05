import { useState, useEffect } from 'react'
import { auth } from '../../api/firebase/firebaseInit'
import { onAuthStateChanged } from 'firebase/auth'

export default function useAuth () {
  const [user, setUser] = useState()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          setUser(user)
        }
      } else {
        setUser(undefined)
      }
    })
  }, [])

  return (
    user
  )
}
