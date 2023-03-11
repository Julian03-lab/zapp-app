import { Alert } from 'react-native'
import { auth } from '../../api/firebase/firebaseInit'
import { sendEmailVerification } from 'firebase/auth'

const showAlert = (setAvailible) =>
  Alert.alert(
    'Correo de verificacion enviado',
    'Podras solicitar una nueva verificacion en 2 minutos',
    [
      {
        text: 'Entendido',
        onPress: () => setAvailible(false),
        style: 'default'
      }
    ],
    {
      cancelable: true
    }
  )

export default function sendVerificationEmail (setAvailible) {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      showAlert(setAvailible)
    })
    .catch((error) => {
      console.log(error)
    })
}
