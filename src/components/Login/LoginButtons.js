import { View } from 'react-native'
import React from 'react'
import CustomLoginButton from './CustomLoginButton'
import { FacebookIcon, GoogleIcon } from '../../assets/icons/icons-list'

export default function LoginButtons () {
  return (
    <View>
      <CustomLoginButton
        icon={<FacebookIcon/>}
        text="Continue With Facebook"
        onPress={() => console.log('Iniciar Sesión')}
        bg="#1877F2"
        color="#FFFFFF"
      />
      <CustomLoginButton
        icon={<GoogleIcon/>}
        text="Continue With Google"
        onPress={() => console.log('Registrarse')}
        bg="#FFFFFF"
        color="rgba(0, 0, 0, 0.54)"
      />
    </View>
  )
}
