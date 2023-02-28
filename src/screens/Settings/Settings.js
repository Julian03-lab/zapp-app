import { View, Text, Switch } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'

export default function SettingScreen () {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  return (
    <View className='bg-white dark:bg-black'>
      <Text>SettingScreen</Text>
      <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme}/>
    </View>
  )
}
