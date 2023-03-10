import React from 'react'
import { Image, Text, View, Platform, SafeAreaView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeScreen } from '../screens/HomeScreen'
import { ProfileScreen } from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator()

export const TabsHome = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: '#F8FAFD',
            }}
            screenOptions={ ({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#E50A17',
                tabBarInactiveTintColor: 'black',
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    elevation: 0,
                    height: Platform.OS === 'android' ? 68 : undefined,
                    padding: 0,
                    margin: 0,
                },
                tabBarIconStyle: {
                    height: 68,
                    width: 50,
                },
                tabBarLabelStyle: {
                    color: 'black',
                    fontFamily: 'WhitneyHTF-Bold',
                    fontSize: 10,
                },
                tabBarIcon: ({ color, focused, size }) => {
                    let title: string = ''

                    console.log(color)

                    switch (route.name) {
                        case 'HomeScreen':
                            title = 'Inicio'
                            break
                        case 'ProfileScreen':
                            title = 'Perfil'
                            break
                    }

                    return (
                        <SafeAreaView style={{ position: 'absolute', top: 0, alignItems: 'center' }}>
                            {
                                focused
                                ? (
                                    <Image
                                        source={ require('../assets/indicator.png') }
                                        style={{ width: 24, height: 4 }}
                                    />
                                ) : (
                                    <Image
                                        source={ require('../assets/indicator.png') }
                                        style={{ display: 'none' }}
                                    />
                                )
                            }
                            {
                                title === 'Inicio'
                                ? focused
                                    ? (
                                        <Image
                                            source={ require('../assets/home-icon-selected.png') }
                                            style={{ position: 'absolute', width: 28, height: 28, top: 12 }}
                                        />
                                    ) : (
                                        <Image
                                            source={ require('../assets/home-icon-unselected.png') }
                                            style={{ position: 'absolute', width: 28, height: 28, top: 12 }}
                                        />
                                    )
                                : null
                            }
                            {
                                title === 'Perfil'
                                ? focused
                                    ? (
                                        <Image
                                            source={ require('../assets/profile-icon-selected.png') }
                                            style={{ position: 'absolute', width: 28, height: 28, top: 12 }}
                                        />
                                    ) : (
                                        <Image
                                            source={ require('../assets/profile-icon-unselected.png') }
                                            style={{ position: 'absolute', width: 28, height: 28, top: 12 }}
                                        />
                                    )
                                : null
                            }
                            <Text style={{ position: 'absolute', color, fontFamily: 'WhitneyHTF-Bold', fontSize: 10, lineHeight: 16, top: 40 }}>
                                { title }
                            </Text>
                        </SafeAreaView>
                    )
                },
            })}
        >
            <Tab.Screen name="HomeScreen" options={{ title: '' }} component={ HomeScreen as any } />
            <Tab.Screen name="ProfileScreen" options={{ title: '' }} component={ ProfileScreen } />
        </Tab.Navigator>
    )
}