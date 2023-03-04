import { View, TextInput, TouchableHighlight, Text } from 'react-native'
import React, { useState } from 'react'
import { EmailIcon, PasswordIcon } from '../../../assets/icons/icons-list'
import { useColorScheme } from 'nativewind'
import PasswordReveal from '../../PasswordReveal'
import PrimaryButton from '../../PrimaryButton'

export default function SignInForm () {
  const { colorScheme } = useColorScheme()
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [hidePassword, setHidePassword] = useState(true)

  return (
    <>
    <View className="w-full items-center">
      <View className="flex-row py-2 px-3 w-full h-12 dark:bg-dark-gray border dark:border-light-gray rounded-xl items-center">
        <EmailIcon
          style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}
        />
        <View className="w-0.5 h-full bg-accent mx-2" />
        <TextInput
          onChangeText={(value) =>
            setValues({
              ...values,
              email: value
            })
          }
          value={values.email}
          placeholder="e.g., email@example.com"
          placeholderTextColor={colorScheme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(9,9,9,0.5)'}
          keyboardType="email-address"
        />
      </View>
      <View className="flex-row py-2 px-3 w-full h-12 dark:bg-dark-gray border dark:border-light-gray rounded-xl items-center my-3">
        <PasswordIcon
          style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}
        />
        <View className="w-0.5 h-full bg-accent mx-2" />
        <TextInput
          onChangeText={(value) =>
            setValues({
              ...values,
              password: value
            })
          }
          className="dark:text-white dark:placeholder:text-white"
          value={values.password}
          placeholder="e.g., ***********"
          placeholderTextColor={colorScheme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(9,9,9,0.5)'}
          secureTextEntry={hidePassword}
          autoCapitalize="none"
        />
      </View>
      <PasswordReveal value={hidePassword} togglePassword={setHidePassword} color={colorScheme === 'dark' ? 'white' : 'black'}/>
      <TouchableHighlight
        onPress={() => console.log('Pressed')}
        activeOpacity={0.6}
        underlayColor="#transparent"
        className='my-3'
      >
        <View className='flex-row'>
          <Text className="font-LibreFranklinMedium text-sm text-dark-gray dark:text-light-gray mr-1">
            No recuerdas tu contraseña?
          </Text>
          <Text className="font-LibreFranklinMedium text-sm text-accent underline decoration-accent">
            Recuperarla ahora
          </Text>
        </View>
      </TouchableHighlight>
    </View>
    <PrimaryButton text='Iniciar Sesion' style={'w-full'}/>
    </>
  )
}
