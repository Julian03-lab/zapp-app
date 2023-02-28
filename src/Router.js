/* eslint-disable camelcase */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/Homescreen/HomeScreen'
import SettingScreen from './screens/Settings/Settings'
import StackScreen from './screens/StackScreen'
import { FontAwesome5 } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  useFonts,
  LibreFranklin_400Regular,
  LibreFranklin_500Medium,
  LibreFranklin_600SemiBold,
  LibreFranklin_700Bold,
  LibreFranklin_800ExtraBold
} from '@expo-google-fonts/libre-franklin'
import { SignikaNegative_400Regular, SignikaNegative_500Medium, SignikaNegative_600SemiBold, SignikaNegative_700Bold } from '@expo-google-fonts/signika-negative'
import { Text, View } from 'react-native'
import Collections from './screens/Collections/Collections'

const Tab = createBottomTabNavigator()
const HomeStackNavigator = createNativeStackNavigator()

function MyStack () {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStackNavigator.Screen name="StackScreen" component={StackScreen} />
    </HomeStackNavigator.Navigator>
  )
}

function MyTabs () {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen name="Settings" component={SettingScreen} />
      <Tab.Screen name="Collections" component={Collections} options={{
        tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
        ),
        headerShown: false
      }}/>
    </Tab.Navigator>
  )
}

export default function Router () {
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
      <MyTabs />
    </NavigationContainer>
  )
}
