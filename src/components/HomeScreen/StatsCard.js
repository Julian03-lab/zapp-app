import { View, Text } from 'react-native'
import React from 'react'
import ScreenTime from '../../assets/illustrations/ScreenTime'

export default function StatsCard () {
  return (
    <View className="shadow-xl flex-row w-full justify-between bg-light-gray dark:bg-dark-gray py-5 px-4 items-center rounded-xl shadow-black">
      <View className=''>
        <View className="bg-dark-gray dark:bg-white rounded px-3 py-1 self-start mb-7">
          <Text className="font-SignikaNegativeBold text-base text-white dark:text-dark-gray">
            ESTA SEMANA
          </Text>
        </View>
        <View className="px-1">
          <View className='flex-row'>
            <Text className="font-LibreFranklinBold text-base dark:text-white">Sesiones:</Text>
            <Text className="font-LibreFranklinMedium text-base dark:text-white ml-1">4</Text>
          </View>
          <View className='flex-row'>
            <Text className="font-LibreFranklinBold text-base dark:text-white">Tiempo Total:</Text>
            <Text className="font-LibreFranklinMedium text-base dark:text-white ml-1">12 HS</Text>
          </View>
        </View>
      </View>
      <ScreenTime />
    </View>
  )
}
