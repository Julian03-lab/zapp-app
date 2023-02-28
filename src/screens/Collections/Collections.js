import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import Title from '../../components/Collections/Title'
import IndividualCollection from '../../components/Collections/IndividualCollection'
import NoCollections from '../../components/Collections/NoCollections'

export default function Collections () {
  const userCollections = []
  return (
    <SafeAreaView
      className="bg-white flex-1 w-full px-4 pb-8"
      style={{ paddingTop: 32 + StatusBar.currentHeight }}
    >
      <Title />
      <View className="flex-1">
        {userCollections.length > 0
          ? (
          <ScrollView>
            <IndividualCollection />
            <IndividualCollection />
            <IndividualCollection />
            <IndividualCollection />
            <IndividualCollection />
            <IndividualCollection />
          </ScrollView>
            )
          : (
          <NoCollections />
            )}
      </View>
    </SafeAreaView>
  )
}
