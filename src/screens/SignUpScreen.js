import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import LoginHeader from '../components/Login/LoginHeader'
import SignUpForm from '../components/Login/SignUp/SignUpForm'
import SignUpGuy from '../assets/illustrations/SignUpGuy'

export default function SignUpScreen ({ navigation }) {
  return (
    <SafeAreaView
    className="bg-white dark:bg-black flex-1 w-full px-6 py-8 relative overflow-hidden items-center justify-between"
      style={{ marginTop: StatusBar.currentHeight }}
    >
      <LoginHeader navigation={navigation} title={'Registrarse'}/>
      <View className="py-8">
        <SignUpGuy width={324} height={200}/>
      </View>
      <SignUpForm />
      <TouchableHighlight
        onPress={() => navigation.navigate('SignIn')}
        activeOpacity={0.7}
        underlayColor="#transparent"
        className="my-3"
      >
        <View className='flex-row'>
          <Text className="font-LibreFranklinMedium text-base text-dark-gray dark:text-light-gray mr-1">
            Ya tienes una cuenta?
          </Text>
          <Text className="font-LibreFranklinMedium text-base text-accent">
            Iniciar sesion
          </Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  )
}
