import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { auth } from '../../api/firebase/firebaseInit'

export default async function createUser ({ email, password, name }, navigation) {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser, {
      displayName: name
    })
    console.log(auth.currentUser)
    sendEmailVerification(auth.currentUser)
      .then(() => {
        navigation.navigate('ConfirmEmail')
      })
  } catch (error) {
    console.log(error)
  }
}
