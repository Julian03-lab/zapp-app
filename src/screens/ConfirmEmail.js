import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableHighlight
} from 'react-native'
import React, { useState, useEffect } from 'react'
import LoginHeader from '../components/Login/LoginHeader'
import SentEmail from '../assets/illustrations/EmailSend'
import GreenBlob from '../assets/illustrations/GreenBlob'
import { auth } from '../api/firebase/firebaseInit'
import PrimaryButton from '../components/PrimaryButton'
import sendVerificationEmail from '../utils/login/sendVerification'
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
    <GhostButton
      text={`${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`}
    />
  )
}

function GhostButton ({ text, onPress }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <Text className="mt-2 text-lg font-LibreFranklinBold text-accent text-center">
        {text}
      </Text>
    </TouchableHighlight>
  )
}

export default function ConfirmEmailScreen ({ navigation }) {
  const [availible, setAvailible] = useState(true)
  const userEmail = auth.currentUser.email
  const verication = auth.currentUser.emailVerified

  useEffect(() => {
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
        <GreenBlob className={'absolute -z-10 bottom-12 -right-1'} />
      </View>
      <View className="mb-8">
        <Text className="text-4xl font-SignikaNegativeBold text-accent text-center my-2">
          Solo falta verificar tu correo
        </Text>
        <Text className="text-base font-LibreFranklinRegular text-black dark:text-white text-center">
          Ya casi terminamos! Te enviamos un enlace de verificación a{' '}
          <Text className="underline">{userEmail}</Text>. Debes verificar tu
          dirección de correo y podrás empezar a crear tus barajas.
        </Text>
      </View>
      <View className='w-full'>
        <PrimaryButton
          text="Continuar"
          onPress={() => navigation.navigate('SignIn')}
        />
        {availible
          ? (
          <GhostButton
            text="Reenviar verificacion"
            onPress={() => sendVerificationEmail(setAvailible)}
          />
            )
          : (
          <Timer setAvailible={setAvailible} />
            )}
      </View>
    </SafeAreaView>
  )
}
