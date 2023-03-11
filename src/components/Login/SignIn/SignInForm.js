import { View, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { EmailIcon, PasswordIcon } from '../../../assets/icons/icons-list'
import { useColorScheme } from 'nativewind'
import PasswordReveal from '../../PasswordReveal'
import PrimaryButton from '../../PrimaryButton'
import loginUser from '../../../utils/login/loginUser'
import { useNavigation } from '@react-navigation/native'

export default function SignInForm () {
  const navigation = useNavigation()
  const { colorScheme } = useColorScheme()
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [hidePassword, setHidePassword] = useState(true)
  const passwordRef = useRef()

  return (
    <>
      <View className="w-full items-center">
        <View className="flex-row py-2 px-3 w-full h-12 dark:bg-black border dark:border-light-gray rounded-xl items-center">
          <EmailIcon
            style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}
          />
          <View className="w-0.5 h-full bg-accent mx-2" />
          <TextInput
            className="dark:text-white dark:placeholder:text-white"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordRef.current.focus()
            }}
            blurOnSubmit={false}
            onChangeText={(value) =>
              setValues({
                ...values,
                email: value
              })
            }
            value={values.email}
            placeholder="e.g., email@example.com"
            placeholderTextColor={
              colorScheme === 'dark'
                ? 'rgba(255,255,255,0.5)'
                : 'rgba(9,9,9,0.5)'
            }
            keyboardType="email-address"
          />
        </View>
        <View className="flex-row py-2 px-3 w-full h-12 dark:bg-black border dark:border-light-gray rounded-xl items-center my-3">
          <PasswordIcon
            style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}
          />
          <View className="w-0.5 h-full bg-accent mx-2" />
          <TextInput
            ref={passwordRef}
            onChangeText={(value) =>
              setValues({
                ...values,
                password: value
              })
            }
            className="dark:text-white dark:placeholder:text-white"
            value={values.password}
            placeholder="e.g., ***********"
            placeholderTextColor={
              colorScheme === 'dark'
                ? 'rgba(255,255,255,0.5)'
                : 'rgba(9,9,9,0.5)'
            }
            secureTextEntry={hidePassword}
            autoCapitalize="none"
          />
        </View>
        <PasswordReveal
          value={hidePassword}
          togglePassword={setHidePassword}
          color={colorScheme === 'dark' ? 'white' : 'black'}
        />
      </View>
      <PrimaryButton text="Entrar a Zapp" style={'w-full'} onPress={() => loginUser(values, navigation)}/>
    </>
  )
}
