import { View } from 'react-native'
import React from 'react'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import { useNavigation } from '@react-navigation/native'

export default function LoginButtons () {
  const navigation = useNavigation()
  return (
    <View style={{ gap: 6 }}>
      <PrimaryButton
        text="Iniciar Sesión"
        onPress={() => navigation.navigate('SignIn')}
      />
      <SecondaryButton
        text="Registrarse"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  )
}
