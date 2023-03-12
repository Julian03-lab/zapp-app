import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import CollectionCarrousel from './CollectionCarrousel'
import { IconEdit, IconDelete, IconPlay } from '../../assets/icons/icons-list'
import { useNavigation } from '@react-navigation/native'

export default function IndividualCollection ({ name }) {
  const navigation = useNavigation()
  return (
    <View className="my-2">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Text className="font-SignikaNegativeSemiBold text-dark-gray dark:text-light-gray text-2xl mr-2">
            {name}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('StudyScreen')}>
            <IconPlay color={'#8BC34A'} />
          </TouchableOpacity>
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
