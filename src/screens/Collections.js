import { SafeAreaView, StatusBar, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/Collections/Title'
import IndividualCollection from '../components/Collections/IndividualCollection'
import NoCollections from '../components/Collections/NoCollections'
import readDecks from '../utils/CollectionsDB/readDecks'
import useAuth from '../utils/hooks/useAuth'

export default function Collections ({ navigation }) {
  const [userCollections, setUserCollections] = useState(null)
  const user = useAuth()

  useEffect(() => {
    if (user) {
      readDecks(user?.uid, setUserCollections)
    }
  }, [user])

  return (
    <SafeAreaView
      className="bg-white dark:bg-black flex-1 w-full px-4 py-8"
      style={{ marginTop: StatusBar.currentHeight }}
    >
      <Title navigation={navigation} />
      <View className="flex-1">
        {userCollections !== null
          ? (<FlatList
          data={userCollections}
          renderItem={({ item }) => (
            <IndividualCollection name={item.name} />
          )}
          keyExtractor={(item) => item.id}
        />)
          : (<NoCollections/>)}

      </View>
    </SafeAreaView>
  )
}
