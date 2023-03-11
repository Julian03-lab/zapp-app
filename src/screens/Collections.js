import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native'
import React from 'react'
import Title from '../components/Collections/Title'
import IndividualCollection from '../components/Collections/IndividualCollection'
import NoCollections from '../components/Collections/NoCollections'

export default function Collections ({ navigation }) {
  const userCollections = []
  return (
    <SafeAreaView
      className="bg-white dark:bg-black flex-1 w-full px-4 py-8"
      style={{ marginTop: StatusBar.currentHeight }}
    >
      <Title navigation={navigation}/>
      <View className="flex-1">
        {userCollections.length > 0
          ? (
          <ScrollView>
            <IndividualCollection navigation={navigation}/>
          </ScrollView>
            )
          : (
          <NoCollections />
            )}
      </View>
    </SafeAreaView>
  )
}
