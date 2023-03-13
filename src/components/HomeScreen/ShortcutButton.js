import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { PlusIcon, OptionIcon, StatsIcon } from '../../assets/icons/icons-list'
import { useColorScheme } from 'nativewind'

const Icon = ({ name }) => {
  const { colorScheme } = useColorScheme()
  switch (name) {
    case 'new':
      return <PlusIcon style={{ color: colorScheme === 'dark' ? 'white' : 'black' }} />
    case 'option':
      return <OptionIcon style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}/>
    case 'stats':
      return <StatsIcon style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}/>
    default:
      return <Text>?</Text>
  }
}

export default function ShortcutButton ({ icon, text, onPress }) {
  return (
    <View className='flex-1 h-20 relative'>
      <TouchableOpacity
        className="px-2 py-3 bg-light-gray dark:bg-dark-gray rounded-xl flex-1  justify-center"
        onPress={onPress}
        activeOpacity={0.9}
      >
        <View className="items-center">
          <Icon name={icon} />
          <Text className="font-LibreFranklinBold dark:text-white text-xs mt-1">
            {text}
          </Text>
        </View>
      </TouchableOpacity>
      <View className='bg-accent w-full h-20 rounded-xl absolute -z-10 top-1 left-1'/>
    </View>
  )
}
