import { View } from 'react-native'
import React from 'react'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import { useNavigation } from '@react-navigation/native'

export default function LoginButtons () {
  const navigation = useNavigation()
  return (
    <View>
      <PrimaryButton
        text="Iniciar Sesión"
        onPress={() => navigation.navigate('SignIn')}
        style={'mb-2'}
      />
      <SecondaryButton
        text="Registrarse"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  )
}
