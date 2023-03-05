import { View, Text, Switch, Button } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'
import { signOut } from 'firebase/auth'
import { auth } from '../api/firebase/firebaseInit'

export default function SettingScreen () {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  const handleSession = () => {
    signOut(auth)
  }

  return (
    <View className='bg-white dark:bg-black'>
      <Text>SettingScreen</Text>
      <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme}/>
      <Button title='Cerrar sesion' onPress={handleSession}/>
    </View>
  )
}
