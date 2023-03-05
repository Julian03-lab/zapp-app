import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableHighlight,
  Text
} from 'react-native'
import React, { useState, useEffect } from 'react'
import LoginHeader from '../components/Login/LoginHeader'
import SentEmail from '../assets/illustrations/EmailSend'
import GreenBlob from '../assets/illustrations/GreenBlob'
import { auth } from '../api/firebase/firebaseInit'
import PrimaryButton from '../components/PrimaryButton'
import sendVerificationEmail from '../utils/login/sendVerification'
import SecondaryButton from '../components/SecondaryButton'
import { signOut } from 'firebase/auth'

function Timer ({ setAvailible }) {
  const [seconds, setSeconds] = useState(300)

  useEffect(() => {
    let interval = null
    if (seconds === 0) {
      setAvailible(true)
    } else if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [seconds])

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  return (
      <PrimaryButton style='w-full' text={`${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`}/>
  )
}

export default function ConfirmEmailScreen ({ navigation }) {
  const [availible, setAvailible] = useState(true)
  const userEmail = auth.currentUser.email
  const verication = auth.currentUser.emailVerified

  useEffect(() => {
    console.log('Verificado', verication)
    return () => {
      signOut(auth)
    }
  }, [verication])

  return (
      <SafeAreaView
        className="bg-white dark:bg-black flex-1 w-full px-6 py-8 relative overflow-hidden items-center"
        style={{ marginTop: StatusBar.currentHeight }}
      >
        <LoginHeader navigation={navigation} title={'Confirmar Correo'} />
        <View className="py-8 relative">
          <SentEmail />
          <GreenBlob className={'absolute -z-10 bottom-12 -right-1'}/>
        </View>
        <View className="mb-8">
          <Text className="text-4xl font-SignikaNegativeBold text-accent text-center my-2">
          Solo falta verificar tu correo
          </Text>
          <Text className="text-base font-LibreFranklinRegular text-black dark:text-white text-center">
            Ya casi terminamos! Te enviamos un enlace de verificación a <Text className='underline'>{userEmail}</Text>. Debes verificar tu dirección de correo y podrás empezar a crear tus barajas.
          </Text>
        </View>
        {availible ? <PrimaryButton text='Reenviar verificacion' onPress={() => sendVerificationEmail(setAvailible)} style={'w-full'}/> : <Timer setAvailible={setAvailible}/>}
      </SafeAreaView>
  )
}
