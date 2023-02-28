import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesome } from '@expo/vector-icons'

export default function Card ({ category, question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <View
      className="bg-light-gray dark:bg-dark-gray w-full py-4 px-3 rounded-xl justify-between shadow-lg shadow-black">
      <View className="flex-col items-center gap-y-4">
        <View
          className={'w-full flex rounded-xl h-4'}
          style={{ backgroundColor: category.color }}
        />
      </View>
      <View className="h-72" style={{ flexDirection: 'row', alignItems: 'center' }}>
      <ScrollView>
        <Text className="font-LibreFranklinSemiBold py-1 text-center text-xl text-dark-gray dark:text-white w-full h-full">
          {!showAnswer ? question : answer}
        </Text>
      </ScrollView>
      </View>
      <View className="flex-row w-full items-center gap-x-2">
        <TouchableOpacity
          onPress={() => setShowAnswer(!showAnswer)}
          className="bg-accent rounded-xl flex-1 flex-row py-1.5 px-3 items-center justify-center gap-x-2"
        >
          <Text className="text-center text-xl font-semibold text-white">
            Revelar
          </Text>
          <FontAwesome name="repeat" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity className="py-2 px-3 border-2 rounded-full border-accent">
          <FontAwesome name="arrow-right" size={24} color="#8BC34A" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

Card.propTypes = {
  category: PropTypes.object,
  question: PropTypes.string,
  answer: PropTypes.string
}
