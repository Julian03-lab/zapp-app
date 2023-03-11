import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

import { BackArrow } from '../assets/icons/icons-list'

export default function GoBack ({ navigation, text }) {
  return (
    <View className="flex-row justify-between w-full items-center">
      <Text className="font-SignikaNegativeSemiBold text-accent text-2xl">
        {text}
      </Text>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="#transparent"
        onPress={() => navigation.navigate('CollectionsStack')}
      >
        <BackArrow color={'#8BC34A'} height={32} width={32}/>
      </TouchableHighlight>
    </View>
  )
}
