import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen () {
  const navigator = useNavigation()
  return (
    <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 35, backgroundColor: '#000' }}
    >
      <Text
      style={{ fontSize: 30, color: '#c9c', fontWeight: 'bold' }}
      >
        HomeScreen
      </Text>
      <View style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: 16 }}>
        <TouchableHighlight
        onPress={() => navigator.navigate('StackScreen')}
        style={{ alignItems: 'center', backgroundColor: '#DDDDDD', padding: 10, marginBottom: 12 }}
        activeOpacity={0.7}
        underlayColor="#ccc">
          <Text>
            New Card
          </Text>

        </TouchableHighlight>
      </View>
    </View>
  )
}
