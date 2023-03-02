import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginScreen } from '../screens/LoginScreen'
import { TabsHome } from './TabsHome';
import { LevelsScreen } from '../screens/LevelsScreen';

export type RootStackParams = {
    LoginScreen: undefined,
    HomeScreen: undefined,
    TabsHome: undefined,
    LevelsScreen: undefined,
}

const Stack = createNativeStackNavigator<RootStackParams>()

export const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="LoginScreen" component={ LoginScreen }></Stack.Screen>
            <Stack.Screen name="TabsHome" component={ TabsHome }></Stack.Screen>
            <Stack.Screen name="LevelsScreen" component={ LevelsScreen }></Stack.Screen>
        </Stack.Navigator>
    )
}