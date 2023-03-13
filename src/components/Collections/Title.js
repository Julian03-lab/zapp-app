import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export default function Title ({ navigation }) {
  return (
    <View className='w-full justify-between flex-row items-center mb-2'>
      <Text style={{ fontFamily: 'SignikaNegative_700Bold' }} className="text-dark-gray dark:text-white text-4xl">
          Barajas
        </Text>
        <TouchableHighlight onPress={() => navigation.navigate('NewCollection')}>
        <AntDesign name="plus" size={32} color="#8BC34A" />
        </TouchableHighlight>
    </View>
  )
}
