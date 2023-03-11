import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import React from 'react'
import CategoryCard from '../HomeScreen/CategoryCard'

const decks = [
  {
    id: 1,
    name: 'Matematica I',
    description: 'Esta es la baraja 1',
    cards: 10,
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 2,
    name: 'Química y Filosofia',
    description: 'Esta es la baraja 2',
    cards: 10,
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 3,
    name: 'Ingles Verbos To Be',
    description: 'Esta es la baraja 3',
    cards: 10,
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 4,
    name: 'Baraja 4',
    description: 'Esta es la baraja 4',
    cards: 10,
    image: 'https://picsum.photos/200/300'
  }
]

export default function DecksPreview ({ navigation }) {
  return (
    <View style={{ gap: 12 }}>
      <View className="flex-row justify-between">
        <Text className="font-SignikaNegativeSemiBold text-2xl dark:text-white">
          Tus Barajas
        </Text>
        <TouchableHighlight activeOpacity={0.6} underlayColor={'transparent'} onPress={() => navigation.navigate('Collections')} >
          <Text className="font-SignikaNegativeRegular text-xl text-accent">Ver Todas</Text>
        </TouchableHighlight>
      </View>
        <ScrollView horizontal>
          {decks.map((deck) => (
            <CategoryCard key={deck.id} name={deck.name} />
          ))}
        </ScrollView>
    </View>
  )
}
