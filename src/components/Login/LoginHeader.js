import { View, Text, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { BackArrow } from '../../assets/icons/icons-list'

export default function LoginHeader ({ navigation, title }) {
  return (
    <>
      <View className="flex-row justify-between w-full">
        <View className="flex-row items-center">
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor="#transparent"
            onPress={() => navigation.navigate('Login')}
          >
            <BackArrow color={'#8BC34A'} />
          </TouchableHighlight>
          <Text className="ml-2 font-SignikaNegativeSemiBold dark:text-white text-2xl">
            {title}
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
