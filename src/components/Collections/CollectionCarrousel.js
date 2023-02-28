import { ScrollView } from 'react-native'
import React from 'react'
import MiniCard from './MiniCard'

export default function CollectionCarrousel () {
  return (
    <ScrollView horizontal={true} className='mt-2 h-32 px-1 bg-white dark:bg-black'>
      <MiniCard addCard={true}/>
      <MiniCard text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea corporis accusantium nihil reprehenderit rem accusamus doloribus blanditiis, quo a, vitae eos laborum architecto animi? Illo, autem? Illo, fugit perferendis?'}/>
      <MiniCard text={'Cual es la capital de suecia?'}/>
      <MiniCard text={'Cual es la capital de suecia?'}/>
      <MiniCard text={'Cual es la capital de suecia?'}/>
    </ScrollView>
  )
}
