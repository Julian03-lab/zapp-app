import { View, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
// import { useNavigation } from '@react-navigation/native'
import example from '../../api/example.json'
import Card from '../../components/StudyScreen/card'
import ActualSession from '../../components/StudyScreen/ActualSession'

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

export default function HomeScreen () {
  // const navigator = useNavigation()
  return (
    <SafeAreaView className="flex-1 w-full bg-white px-9 items-center justify-evenly" style={{ paddingTop: StatusBar.currentHeight }}>
      <ActualSession/>
      <View className="w-full">
        <Card category={data.category} question={data.question} answer={data.answer}/>
      </View>

    </SafeAreaView>
  )
}
