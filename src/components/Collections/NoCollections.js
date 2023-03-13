import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import EmptyBox from '../../assets/illustrations/EmptyBox'

export default function NoCollections ({ navigation }) {
  return (
    <View className="items-center justify-center">
      <EmptyBox width={321} height={239} />
      <View>
        <Text className="mt-5 font-SignikaNegativeBold text-5xl text-dark-gray dark:text-white text-center">
          AUN NO HAY BARAJAS
        </Text>
        <TouchableHighlight underlayColor={'transparent'} onPress={() => navigation.navigate('NewCollection')}>
          <Text className="font-LibreFranklinBold text-xl text-accent decoration-accent text-center underline">
            Crear una nueva
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}
