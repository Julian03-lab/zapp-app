import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SecondaryButton ({ icon, text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} className='mt-2 shadow-lg shadow-black rounded-xl justify-center items-center flex-row py-3 bg-white dark:bg-black border border-accent'>
        {icon}
        <Text className='text-xl font-LibreFranklinBold ml-2 text-accent'>{text}</Text>
    </TouchableOpacity>
  )
}
