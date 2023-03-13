import {
  Text,
  TouchableHighlight
} from 'react-native'
import React from 'react'

export default function GhostButton ({ text, onPress }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <Text className="mt-2 text-lg font-LibreFranklinBold text-accent text-center">
        {text}
      </Text>
    </TouchableHighlight>
  )
}
