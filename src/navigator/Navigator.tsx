import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useAppDispatch, useAppSelector } from '../redux/hooks'

import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { LoginScreen } from '../screens/LoginScreen'
import { TabsHome } from './TabsHome'
import { LevelsScreen } from '../screens/LevelsScreen'
import { MissionsListScreen } from '../screens/MissionsListScreen'
import { MissionScreen } from '../screens/MissionScreen'
import { TermsScreen } from '../screens/TermsScreen'
import { PrivacyScreen } from '../screens/PrivacyScreen'
import { notAuth, auth } from '../redux/slices/user'
import { SecretMissionScreen } from '../screens/SecretMissionScreen'

export type RootStackParams = {
    LoginScreen: undefined,
    HomeScreen: undefined,
    ProfileScreen: undefined,
    TabsHome: undefined,
    LevelsScreen: undefined,
    MissionsListScreen: undefined,
    MissionScreen: { nextMissionTitleBoolean: boolean },
    SecretMissionScreen: { title: string, description: string },
    TermsScreen: undefined,
    PrivacyScreen: undefined,
}

const Stack = createNativeStackNavigator<RootStackParams>()

export const Navigator = () => {

    const dispatch = useAppDispatch()
    const authentication = useAppSelector((state) => state.userReducer)

    useEffect(() => {
        checkSession()
    }, [authentication.status])

    const checkSession = async() => {
        const check = await AsyncStorage.getItem('user')

        if (!check) {
            SplashScreen.hide()
            return dispatch(notAuth())
        }

        dispatch(auth())
        SplashScreen.hide()
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            {
                authentication.status === 'authenticated'
                ? (
                    <>
                        <Stack.Screen name="TabsHome" component={ TabsHome }></Stack.Screen>
                        <Stack.Screen name="LevelsScreen" component={ LevelsScreen }></Stack.Screen>
                        <Stack.Screen name="MissionsListScreen" component={ MissionsListScreen }></Stack.Screen>
                        <Stack.Screen name="MissionScreen" component={ MissionScreen }></Stack.Screen>
                        <Stack.Screen name="SecretMissionScreen" component={ SecretMissionScreen }></Stack.Screen>
                    </>
                ) : (
                    <>
                        <Stack.Screen name="LoginScreen" component={ LoginScreen }></Stack.Screen>
                        <Stack.Screen name="TabsHome" component={ TabsHome }></Stack.Screen>
                        <Stack.Screen name="TermsScreen" component={ TermsScreen }></Stack.Screen>
                        <Stack.Screen name="PrivacyScreen" component={ PrivacyScreen }></Stack.Screen>
                    </>
                )
            }
        </Stack.Navigator>
    )
}