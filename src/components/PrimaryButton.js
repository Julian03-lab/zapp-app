import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function PrimaryButton ({ icon, text, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} className={`mt-2 shadow-lg shadow-black rounded-xl justify-center items-center flex-row py-3 bg-accent border border-accent ${style}`} >
        {icon}
        <Text className='text-xl font-LibreFranklinBold ml-2 text-white dark:text-black'>{text}</Text>
    </TouchableOpacity>
  )
}
