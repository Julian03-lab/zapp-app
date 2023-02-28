import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import CollectionCarrousel from './CollectionCarrousel'
import { IconEdit, IconDelete, IconPlay } from '../../assets/icons/icons-list'

export default function IndividualCollection () {
  return (
    <View className="my-2">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Text className="font-SignikaNegativeSemiBold text-dark-gray text-2xl mr-2">
            Baraja 1
          </Text>
          <IconPlay color={'#8BC34A'} />
        </View>
        <View className="flex-row gap-x-2">
          <TouchableHighlight>
            <IconEdit color={'#8BC34A'} />
          </TouchableHighlight>
          <TouchableHighlight>
            <IconDelete color={'#8BC34A'} />
          </TouchableHighlight>
        </View>
      </View>
      <CollectionCarrousel />
    </View>
  )
}
