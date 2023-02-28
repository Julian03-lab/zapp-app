import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

export default function Title () {
  return (
    <View className='w-full justify-between flex-row items-center mb-2'>
      <Text style={{ fontFamily: 'SignikaNegative_700Bold' }} className="text-dark-gray text-4xl">
          Barajas
        </Text>
        <FontAwesome name="plus" size={32} color="#8BC34A" />
    </View>
  )
}
