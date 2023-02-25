import { View, Text } from 'react-native'
import React from 'react'

export default function ActualSession () {
  return (
    <View className="flex items-center">
      <Text className="text-white font-bold text-5xl">Matematica I</Text>
      <View className="flex-row items-center">
        <Text className="mr-1 font-bold text-xl text-white">Sesion Actual:</Text>
        <Text className="font-semibold text-xl text-white">12:42</Text>
      </View>
      <View className="flex-row gap-x-0.5">
        <Text>12 Cartas</Text>
        <Text>9 Restantes</Text>
      </View>
      <View className="flex-row gap-x-0.5 items-center">
        <Text className="text-emerald-700 font-bold text-xl">6</Text>
        <Text className="font-bold">/</Text>
        <Text className="text-yellow-700 font-bold text-xl">4</Text>
        <Text className="font-bold">/</Text>
        <Text className="text-rose-700 font-bold text-xl">2</Text>
      </View>
    </View>
  )
}
