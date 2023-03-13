import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CollectionCarrousel from './CollectionCarrousel'
import { IconEdit, IconDelete, IconPlay } from '../../assets/icons/icons-list'
import { useNavigation } from '@react-navigation/native'
import ModalRemoveCollection from './ModalRemoveCollection'

export default function IndividualCollection ({ name, color, id }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigation = useNavigation()
  return (
    <View className="py-2">
      <View className="flex-row justify-between items-center">
        <View className="flex-row">
          <Text numberOfLines={1} className="max-w-[256px] opacity-70 font-SignikaNegativeSemiBold text-dark-gray dark:text-light-gray text-2xl mr-1 px-1.5 rounded-lg" style={{ backgroundColor: color }}>
            {name}
          </Text>
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('StudyScreen')}>
            <IconPlay color={'#8BC34A'} width={32} height={32}/>
          </TouchableOpacity>
        </View>
        <View className="flex-row gap-x-2">
          <TouchableHighlight>
            <IconEdit color={'#8BC34A'} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => setIsModalOpen(!isModalOpen)}>
            <IconDelete color={'#8BC34A'} />
          </TouchableHighlight>
        </View>
      </View>
      <CollectionCarrousel />
      <ModalRemoveCollection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} name={name} id={id}/>
    </View>
  )
}
