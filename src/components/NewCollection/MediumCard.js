import { View, Text } from 'react-native'
import React from 'react'

export default function MediumCard ({ barColor, text }) {
  return (
    <View className='self-center my-3'>
      <View className="bg-light-gray dark:bg-dark-gray border-2 border-accent px-2 py-3 rounded-lg items-center">
        <View
          className="w-36 h-4 rounded-xl mb-2"
          style={{ backgroundColor: barColor }}
        />
        <View className="w-36 h-36 items-center justify-center">
          <Text className="font-LibreFranklinBold text-xl text-black text-center dark:text-white">
            {text}
          </Text>
        </View>
      </View>
      <View
          className="w-[166px] h-[200px] top-1.5 -right-2 rounded-xl mb-2 absolute -z-10 bg-accent"
        />
    </View>
  )
}
