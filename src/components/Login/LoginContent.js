import { View, Text } from 'react-native'
import React from 'react'
import LoginButtons from './LoginButtons'

export default function LoginContent () {
  return (
    <View className="px-3 py-4 justify-between bg-white dark:bg-black">
      <View className="items-center mb-8">
        <Text className="text-center mb-2 text-dark-gray dark:text-white text-4xl font-SignikaNegativeSemiBold">
          Aprende de otra manera con <Text className="text-accent">Zapp</Text>.
        </Text>
        <Text className="text-center text-dark-gray/60 dark:text-white/80 text-lg font-LibreFranklinRegular">
          Unete ahora y comienza a crea tus propias barajas de aprendizaje!
        </Text>
      </View>
      <View>
        <LoginButtons/>
      </View>
    </View>
  )
}
