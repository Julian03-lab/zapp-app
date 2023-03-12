import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import ColorPicker from 'react-native-wheel-color-picker'
import MediumCard from './MediumCard'
import PrimaryButton from '../PrimaryButton'
import createDeck from '../../utils/CollectionsDB/createDeck'
import useAuth from '../../utils/hooks/useAuth'

export default function CollectionForm ({ navigation }) {
  const user = useAuth()
  const [name, setName] = useState('')
  const [color, setColor] = useState('#fff')

  const handleSubmit = (name, color) => {
    if (name === '') {
      alert('Debes ingresar un nombre para la baraja')
      return
    }
    createDeck(user?.uid, name, color).then(() => {
      navigation.navigate('CollectionsStack')
    }).catch((error) => {
      alert(error)
    })
  }

  return (
    <>
    <View className="w-full">
      <View className="w-full flex-row">
        <View className="flex-1">
          <Text className="font-LibreFranklinBold text-xl text-black dark:text-white mb-2">
            Nombre de la baraja
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            className="px-3 h-10 w-full dark:bg-black border dark:border-light-gray rounded-xl items-center dark:text-white font-LibreFranklinMedium text-base"
          />
        </View>
        <View className="ml-3 items-start">
          <Text className="font-LibreFranklinBold text-lg text-black dark:text-white mb-2">
            Color
          </Text>
          <View
            className="w-20 h-10 rounded-lg border border-black dark:border-light-gray"
            style={{ backgroundColor: color }}
          />
        </View>
      </View>
      <MediumCard barColor={color} text={name} />
      <View className="mt-3 py-3 px-3 w-full h-12 bg-light-gray dark:bg-dark-gray border dark:border-dark-gray border-black rounded-xl">
        <ColorPicker onColorChange={setColor} swatchesOnly />
      </View>
    </View>
    <PrimaryButton text={'Crear Baraja'} onPress={() => handleSubmit(name, color)}/>
    </>
  )
}
