import { View, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import PasswordReveal from '../../PasswordReveal'
import PrimaryButton from '../../PrimaryButton'
import {
  EmailIcon,
  PasswordIcon,
  UserIcon
} from '../../../assets/icons/icons-list'
import { useColorScheme } from 'nativewind'
import createUser from '../../../utils/login/createUser'
import { useNavigation } from '@react-navigation/native'

export default function SignUpForm () {
  const navigation = useNavigation()
  const { colorScheme } = useColorScheme()
  const [values, setValues] = useState({
    email: '',
    name: '',
    password: ''
  })
  const [hidePassword, setHidePassword] = useState(true)
  const emailRef = useRef()
  const passwordRef = useRef()

  return (
    <>
      <View className="w-full items-center">
        <View className="flex-row py-2 px-3 w-full dark:bg-black border dark:border-light-gray rounded-xl items-center mb-3">
          <UserIcon
            style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}
          />
          <View className="w-0.5 h-full bg-accent mx-2" />
          <TextInput
            returnKeyType="next"
            onSubmitEditing={() => {
              emailRef.current.focus()
            }}
            blurOnSubmit={false}
            className="dark:text-white dark:placeholder:text-white w-full"
            onChangeText={(value) =>
              setValues({
                ...values,
                name: value
              })
            }
            value={values.name}
            placeholder="e.g., Jhon Doe"
            placeholderTextColor={
              colorScheme === 'dark'
                ? 'rgba(255,255,255,0.5)'
                : 'rgba(9,9,9,0.5)'
            }
          />
        </View>
        <View className="flex-row py-2 px-3 w-full dark:bg-black border dark:border-light-gray rounded-xl items-center">
          <EmailIcon
            style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}
          />
          <View className="w-0.5 h-full bg-accent mx-2" />
          <TextInput
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordRef.current.focus()
            }}
            blurOnSubmit={false}
            className="dark:text-white dark:placeholder:text-white w-full"
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
        <View className="flex-row py-2 px-3 w-full dark:bg-black border dark:border-light-gray rounded-xl items-center my-3">
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
            className="dark:text-white dark:placeholder:text-white w-full"
            value={values.password}
            placeholder="Al menos 8 caracteres"
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
      <PrimaryButton text="Crear cuenta" style={'w-full'} onPress={() => createUser(values, navigation)}/>
    </>
  )
}
