import { View, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import Card from '../../components/StudyScreen/card'
import ActualSession from '../../components/StudyScreen/ActualSession'
import Header from '../../components/StudyScreen/Header'

const data = {
  id: 1,
  category: {
    name: 'Physics',
    color: 'red'
  },
  question: 'What is the name of the force that keeps the planets in orbit around the sun?',
  answer: 'Gravity',
  status: 'unanswered'
}

export default function StudyScreen ({ navigation }) {
  return (
    <SafeAreaView className="flex-1 w-full bg-white dark:bg-black px-4 items-center justify-between py-8" style={{ marginTop: StatusBar.currentHeight }}>
      <Header navigation={navigation}/>
      <ActualSession/>
      <View className="w-full">
        <Card category={data.category} question={data.question} answer={data.answer}/>
      </View>

    </SafeAreaView>
  )
}
