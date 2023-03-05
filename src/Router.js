/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import { Text, View, useColorScheme } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import SettingScreen from './screens/Settings'
import Collections from './screens/Collections'
import StudyScreen from './screens/StudyScreen'
import LoginScreen from './screens/LoginScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'

import {
  useFonts,
  LibreFranklin_400Regular,
  LibreFranklin_500Medium,
  LibreFranklin_600SemiBold,
  LibreFranklin_700Bold,
  LibreFranklin_800ExtraBold
} from '@expo-google-fonts/libre-franklin'
import { SignikaNegative_400Regular, SignikaNegative_500Medium, SignikaNegative_600SemiBold, SignikaNegative_700Bold } from '@expo-google-fonts/signika-negative'
import { TabCollection, TabHome } from './assets/icons/icons-list'
import { useColorScheme as useColorSchemeNativeWind } from 'nativewind'
import useAuth from './utils/hooks/useAuth'
import ConfirmEmailScreen from './screens/ConfirmEmail'

const Tab = createBottomTabNavigator()
const CollectionsStack = createNativeStackNavigator()
const AuthStack = createNativeStackNavigator()

function MyStack () {
  return (
    <CollectionsStack.Navigator initialRouteName="Collections" >
      <CollectionsStack.Screen
        name="CollectionsStack"
        component={Collections}
        options={{ headerShown: false }}
      />
      <CollectionsStack.Screen name="StudyScreen" component={StudyScreen} options={{ headerShown: false }}/>
    </CollectionsStack.Navigator>
  )
}

function AuthStackScreen () {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
      <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
      <AuthStack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} options={{ headerShown: false }}/>
    </AuthStack.Navigator>
  )
}

function MyTabs () {
  const { colorScheme } = useColorSchemeNativeWind()
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#8BC34A',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#333333' : '#f5f5f5'
        },
        tabBarShowLabel: false
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabHome color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen name="Settings" component={SettingScreen} />
      <Tab.Screen name="Collections" component={MyStack} options={{
        tabBarIcon: ({ color }) => (
            <TabCollection color={color} />
        ),
        headerShown: false
      }}/>
    </Tab.Navigator>
  )
}

export default function Router () {
  const { setColorScheme } = useColorSchemeNativeWind()
  const systemColor = useColorScheme()

  const user = useAuth()
  const [fontsLoaded] = useFonts({
    LibreFranklin_400Regular,
    LibreFranklin_500Medium,
    LibreFranklin_600SemiBold,
    LibreFranklin_700Bold,
    LibreFranklin_800ExtraBold,
    SignikaNegative_400Regular,
    SignikaNegative_500Medium,
    SignikaNegative_600SemiBold,
    SignikaNegative_700Bold
  })

  useEffect(() => {
    systemColor && setColorScheme(systemColor)
  }, [])

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
  return (
    <NavigationContainer>
      {user ? <MyTabs /> : <AuthStackScreen />}
    </NavigationContainer>
  )
}
