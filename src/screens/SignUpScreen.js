import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import LoginHeader from '../components/Login/LoginHeader'

export default function SignUpScreen ({ navigation }) {
  return (
    <SafeAreaView
      className="bg-white dark:bg-black flex-1 w-full px-4 py-8 relative overflow-hidden"
      style={{ marginTop: StatusBar.currentHeight }}
    >
      <LoginHeader navigation={navigation} title={'Registrarse'}/>
      <Text>SignUpScreen</Text>
    </SafeAreaView>
  )
}
