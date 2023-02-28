import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

export default function Header ({ navigation }) {
  return (
    <View className="flex-row justify-between w-full items-center">
      <View>
        <Text
          style={{ fontFamily: 'LibreFranklin_600SemiBold' }}
          className="text-base text-dark-gray/60 dark:text-white/60"
        >
          Baraja Actual
        </Text>

        <Text
          style={{ fontFamily: 'SignikaNegative_700Bold' }}
          className="text-dark-gray dark:text-white text-3xl"
        >
          Matematica II
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5 name="exchange-alt" size={24} color="#8BC34A" />
      </TouchableOpacity>
    </View>
  )
}
