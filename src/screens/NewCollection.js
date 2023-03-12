import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import CollectionForm from '../components/NewCollection/CollectionForm'
import GoBack from '../components/GoBack'
import NewCollectionGuy from '../assets/illustrations/NewCollectionGuy'

export default function NewCollection ({ navigation }) {
  return (
    <SafeAreaView
      className="bg-white dark:bg-black flex-1 w-full px-6 py-8 relative overflow-hidden items-center justify-between"
      style={{ marginTop: StatusBar.currentHeight }}
    >
      <GoBack navigation={navigation} text={'NUEVA BARAJA'}/>
      <NewCollectionGuy width={276} height={188}/>
      <CollectionForm navigation={navigation}/>
    </SafeAreaView>
  )
}
