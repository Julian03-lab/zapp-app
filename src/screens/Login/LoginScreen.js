import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import LoginContent from '../../components/Login/LoginContent'
import LoginIllustration from '../../components/Login/LoginIllustration'

export default function HomeScreen () {
  return (
    <SafeAreaView className='bg-white dark:bg-black flex-1 w-full p-3' style={{ marginTop: StatusBar.currentHeight }}>
      <LoginIllustration/>
      <LoginContent/>
    </SafeAreaView>
  )
}
