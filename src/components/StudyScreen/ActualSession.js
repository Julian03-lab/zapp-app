import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons'

export default function ActualSession () {
  return (
    <View className="flex-col items-center w-full py-2">
      <View className="flex-row justify-between px-3 items-center w-full">
        <View className="flex-col">
          <Text className="font-semibold text-base text-dark-gray/60">Sesion Actual:</Text>
          <Text className="font-semibold text-base text-dark-gray">12:42</Text>
        </View>
        <MaterialIcons name="access-alarm" size={32} color="#8BC34A" />
      </View>
      <View className="flex-row justify-between px-3 items-center w-full">
        <View className="flex-col">
          <Text className="font-semibold text-base text-dark-gray/60">Totales / Restantes:</Text>
          <Text className="font-semibold text-base text-dark-gray">12 / 9</Text>
        </View>
        <FontAwesome5 name="clipboard" size={32} color="#8BC34A" />
      </View>
      <View className="flex-row justify-between px-3 items-center w-full">
        <View className="flex-col">
          <Text className="font-semibold text-base text-dark-gray/60">Aciertos / Fallos:</Text>
          <Text className="font-semibold text-base text-dark-gray">6 / 4</Text>
        </View>
        <Ionicons name="stats-chart" size={32} color="#8BC34A" />
      </View>
    </View>
  )
}
