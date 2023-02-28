import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import EmptyBox from '../../assets/illustrations/EmptyBox'

export default function NoCollections () {
  return (
    <View className="flex-1 items-center justify-evenly ">
      <EmptyBox width={321} height={239} />
      <View>
        <Text className="font-SignikaNegativeBold text-5xl text-dark-gray dark:text-white text-center">
          AUN NO HAY BARAJAS :(
        </Text>
        <TouchableHighlight>
          <Text className="font-LibreFranklinMedium text-xl text-accent decoration-accent text-center underline">
            Crear una nueva
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}
