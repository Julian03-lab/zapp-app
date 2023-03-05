import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../api/firebase/firebaseInit'

export default async function loginUser ({ email, password }, navigation) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    console.log(result.user)
    if (result.user.emailVerified === false) {
      navigation.navigate('ConfirmEmail')
    }
  } catch (error) {
    console.log(error)
  }
}
