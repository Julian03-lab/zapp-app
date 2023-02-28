import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

export default function Header () {
  return (
    <View className="flex-row justify-between w-full items-center">
      <View>
        <Text
          style={{ fontFamily: 'LibreFranklin_600SemiBold' }}
          className="text-base text-dark-gray/60"
        >
          Baraja Actual
        </Text>

        <Text
          style={{ fontFamily: 'SignikaNegative_700Bold' }}
          className="text-dark-gray text-3xl"
        >
          Matematica II
        </Text>
      </View>
      <TouchableHighlight>
        <FontAwesome5 name="exchange-alt" size={24} color="#8BC34A" />
      </TouchableHighlight>
    </View>
  )
}
