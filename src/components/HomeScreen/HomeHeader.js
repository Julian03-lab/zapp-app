import { View, Text, Image } from 'react-native'
import React from 'react'
import useAuth from '../../utils/hooks/useAuth'

export default function HomeHeader () {
  const user = useAuth()
  return (
    <>
      <View className="flex-row justify-between w-full">
        <View className="flexitems-center">
          <Text className="font-LibreFranklinSemiBold dark:text-white/80 text-base">
            Que bueno verte
          </Text>
          <Text className="font-SignikaNegativeBold dark:text-white text-xl">
            {user?.displayName}
          </Text>
        </View>
        <Image
          source={require('../../assets/full-icon.png')}
          alt={'Zapp Full Icon'}
          style={{ resizeMode: 'center', height: 38, width: 92 }}
        />
      </View>
      <View className="bg-accent w-64 h-64 rounded-full absolute -top-32 -right-24 -z-10" />
    </>
  )
}
