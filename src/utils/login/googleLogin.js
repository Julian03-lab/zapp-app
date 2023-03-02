import { GoogleAuthProvider, getRedirectResult, signInWithRedirect } from 'firebase/auth'
import { auth } from '../../api/firebase/firebaseInit'

export default function LoginWithGoogle () {
  const googleProvider = new GoogleAuthProvider()
  console.log('Iniciando Sesión con Google')
  return signInWithRedirect(auth, googleProvider)
//   getRedirectResult(auth)
//     .then((result) => {
//       if (result) {
//         console.log('result', result.user)
//       }
//     })
//     .catch((error) => {
//       console.log('error', error)
//     })
}
