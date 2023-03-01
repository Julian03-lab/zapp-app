import { View, Text } from 'react-native'
import React from 'react'
import LoginButtons from './LoginButtons'

export default function LoginContent () {
  return (
    <View className="flex-1 px-3 py-4 justify-between bg-white dark:bg-black">
      <View className="items-center">
        <Text className="text-center mb-4 text-dark-gray dark:text-white text-4xl font-SignikaNegativeBold">
          Aprende de otra manera con <Text className="text-accent">Zapp</Text>.
        </Text>
        <Text className="text-center text-dark-gray/50 dark:text-white/80 text-base font-LibreFranklinBold">
          Inicia Sesión y Crea Tus Propias Barajas de Aprendizaje
        </Text>
      </View>
      <View>
        <LoginButtons />
      </View>
    </View>
  )
}
