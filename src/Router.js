/* eslint-disable camelcase */
import React from 'react'
import { Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/Homescreen/HomeScreen'
import SettingScreen from './screens/Settings/Settings'
import Collections from './screens/Collections/Collections'
import StudyScreen from './screens/StudyScreen/StudyScreen'
import LoginScreen from './screens/Login/LoginScreen'

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
import { useColorScheme } from 'nativewind'
import useAuth from './utils/hooks/useAuth'

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
    <AuthStack.Navigator initialRouteName="Home">
      <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
    </AuthStack.Navigator>
  )
}

function MyTabs () {
  const { colorScheme } = useColorScheme()
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
