import { SafeAreaView, StatusBar, View } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeScreen/HomeHeader'
import StatsCard from '../components/HomeScreen/StatsCard'
import DecksPreview from '../components/HomeScreen/DecksPreview'
import Shortcuts from '../components/HomeScreen/Shortcuts'

export default function HomeScreen ({ navigation }) {
  return (
    <SafeAreaView
      className="bg-white dark:bg-black flex-1 p-6 overflow-hidden"
      style={{ marginTop: StatusBar.currentHeight }}
    >
      <HomeHeader />
      <View style={{ gap: 32, flex: 1, justifyContent: 'center' }}>
        <StatsCard />
        <DecksPreview navigation={navigation} />
        <Shortcuts />
      </View>
    </SafeAreaView>
  )
}
