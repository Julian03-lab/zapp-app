import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from './screens/Homescreen/HomeScreen'
import SettingScreen from './screens/Settings/Settings'
import StackScreen from './screens/StackScreen'
import { FontAwesome5 } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createBottomTabNavigator()
const HomeStackNavigator = createNativeStackNavigator()

function MyStack(){
    return(
        <HomeStackNavigator.Navigator initialRouteName='HomeScreen'>
            <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStackNavigator.Screen name="StackScreen" component={StackScreen} />
        </HomeStackNavigator.Navigator>
    )
}

function MyTabs(){
    return(
        <Tab.Navigator
        initialRouteName='Home'
        >
            <Tab.Screen name="Home" component={MyStack} options={{
                tabBarIcon: ({color, size})=>(
                    <FontAwesome5 name="home" size={size} color={color} />
                ),
                headerShown: false
            }}/>
            <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
    )
}

export default function Router() {
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}