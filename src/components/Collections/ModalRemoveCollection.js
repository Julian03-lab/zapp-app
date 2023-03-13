import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import EliminateContent from '../../assets/illustrations/EliminateContent'
import useAuth from '../../utils/hooks/useAuth'
import deleteDeck from '../../utils/CollectionsDB/eliminateDeck'

export default function ModalRemoveCollection ({
  isModalOpen,
  setIsModalOpen,
  id,
  name
}) {
  const user = useAuth()
  const handleEliminate = () => {
    deleteDeck(id, user?.uid)
      .then(() => setIsModalOpen(!isModalOpen))
      .catch((error) => console.log('Error eliminando', error))
  }
  return (
    <Modal animationType="slide" transparent={true} visible={isModalOpen} onRequestClose={() => setIsModalOpen(!isModalOpen)}>
      <View className="flex-1 justify-center bg-dark-gray/80 blur-2xl" >
        <View
          style={{ gap: 32 }}
          className="bg-[#e2e2e2] dark:bg-dark-gray mx-4 shadow-2xl shadow-black px-3 py-4 rounded-xl items-center"
        >
          <View className='bg-accent w-full items-center py-4 rounded-xl'>
            <EliminateContent />
          </View>
          <View>
            <Text className="font-LibreFranklinRegular text-2xl text-black dark:text-white text-center">
              La baraja{' '}
              <Text className="font-LibreFranklinBold text-2xl">{name}</Text>{' '}
              sera eliminada.
            </Text>
            <Text className="font-LibreFranklinBold text-base text-black dark:text-white text-center mt-1">
              Esta accion no se puede deshacer.
            </Text>
          </View>
          <View className="flex-row items-center justify-center">
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setIsModalOpen(!isModalOpen)}
              className="flex-1"
            >
              <Text className="shadow-lg shadow-black text-lg font-LibreFranklinSemiBold text-black dark:text-white  text-center py-1 px-2">
                Cancelar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleEliminate}
              className="flex-1 ml-2"
            >
              <Text className="text-lg font-LibreFranklinBold text-rose-500 text-center">
                Borrar colección
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
