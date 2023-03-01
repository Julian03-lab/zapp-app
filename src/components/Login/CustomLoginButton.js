import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomLoginButton ({ icon, text, onPress, bg, color }) {
  return (
    <TouchableOpacity onPress={onPress} className='mt-2 shadow-lg shadow-black rounded-xl justify-center items-center flex-row py-3' style={{ backgroundColor: bg }}>
        {icon}
        <Text className='text-xl font-LibreFranklinBold ml-2' style={{ color }}>{text}</Text>
    </TouchableOpacity>
  )
}
