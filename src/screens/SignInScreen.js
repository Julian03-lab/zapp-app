import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableHighlight,
  Text
} from 'react-native'
import React from 'react'
import LoginHeader from '../components/Login/LoginHeader'
import SignInGuy from '../assets/illustrations/SignInGuy'
import SignInForm from '../components/Login/SignIn/SignInForm'

export default function SignInScreen ({ navigation }) {
  return (
    <SafeAreaView
      className="bg-white dark:bg-black flex-1 w-full px-6 py-8 relative overflow-hidden items-center justify-between"
      style={{ marginTop: StatusBar.currentHeight }}
    >
      <LoginHeader navigation={navigation} title={'Iniciar Sesion'} />
      <View className="py-8">
        <SignInGuy />
      </View>
      <SignInForm />
      <TouchableHighlight
        onPress={() => navigation.navigate('SignUp')}
        activeOpacity={0.7}
        underlayColor="#transparent"
        className="my-3"
      >
        <View className='flex-row'>
          <Text className="font-LibreFranklinMedium text-base text-dark-gray dark:text-light-gray mr-1">
            No tienes cuenta?
          </Text>
          <Text className="font-LibreFranklinMedium text-base text-accent">
            Crear una nueva
          </Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  )
}
