import { View, Text } from 'react-native'
import React from 'react'
import ShortcutButton from './ShortcutButton'

export default function Shortcuts () {
  return (
    <View>
      <Text className="font-SignikaNegativeSemiBold text-2xl dark:text-white">Acceso Rapido</Text>
      <View style={{ gap: 12 }} className='flex-row w-full mt-3'>
        <ShortcutButton icon={'new'} text="Crear Baraja" onPress={() => console.log('xd')}/>
        <ShortcutButton icon={'stats'} text="Estadisticas" onPress={() => console.log('xd')}/>
        <ShortcutButton icon={'option'} text="Opciones" onPress={() => console.log('xd')}/>
      </View>
    </View>
  )
}
