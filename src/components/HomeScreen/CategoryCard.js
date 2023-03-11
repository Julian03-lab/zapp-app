import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CategoryCard ({ name }) {
  return (
    <TouchableOpacity activeOpacity={0.5} className='bg-light-gray dark:bg-dark-gray px-2 py-1 mr-2 w-32 h-44 rounded-lg items-center justify-center'>
      <Text className='text-dark-gray dark:text-white text-sm font-LibreFranklinMedium text-center'>{name}</Text>
    </TouchableOpacity>
  )
}
