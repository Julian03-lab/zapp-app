import { ScrollView } from 'react-native'
import React from 'react'
import MiniCard from './MiniCard'

export default function CollectionCarrousel () {
  return (
    <ScrollView horizontal={true} className='mt-2 h-32 px-1 bg-white dark:bg-black'>
      <MiniCard addCard={true}/>
    </ScrollView>
  )
}
