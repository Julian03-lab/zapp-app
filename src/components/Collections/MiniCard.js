import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { AntDesign } from '@expo/vector-icons'

export default function MiniCard ({ text, addCard }) {
  return (
    <View className='justify-center items-center py-1.5 px-1 bg-light-gray dark:bg-dark-gray rounded-lg w-20 h-28 mr-2 shadow-sm shadow-black self-center'>
      <Text numberOfLines={5} className='text-center font-LibreFranklinSemiBold text-dark-gray dark:text-white' style={{ fontSize: 10 }}>{text}</Text>
      {addCard && <AntDesign name="plus" size={32} color="#8BC34A" />}
    </View>
  )
}

MiniCard.propTypes = {
  addCard: PropTypes.bool,
  text: PropTypes.string
}
