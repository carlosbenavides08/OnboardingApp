import React from 'react'
import { Image, Text, View } from 'react-native'
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
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 68,
                },
                tabBarLabelStyle: {
                    fontFamily: 'WhitneyHTF-Bold',
                    fontSize: 10
                },
                tabBarIcon: ({ color, focused, size }) => {
                    let title: string = ''

                    switch (route.name) {
                        case 'HomeScreen':
                            title = 'Inicio'
                            break
                        case 'ProfileScreen':
                            title = 'Perfil'
                            break
                    }

                    return (
                        <View style={{ position: 'relative' }}>
                            {
                                focused
                                ? (
                                    <Image
                                        source={ require('../assets/indicator.png') }
                                        style={{ position: 'absolute', width: 24, height: 4, top: 2 }}
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
                                ? (
                                    <Image
                                        source={ require('../assets/home-icon-selected.png') }
                                        style={{ width: 22.75, height: 20.09, marginTop: 20 }}
                                    />
                                ) : (
                                    <Image
                                        source={ require('../assets/profile-icon-unselected.png') }
                                        style={{ width: 19.25, height: 21, marginTop: 20, marginLeft: 2 }}
                                    />
                                )
                            }
                            <Text style={{ color, fontFamily: 'WhitneyHTF-Bold', fontSize: 10, lineHeight: 16, marginTop: 2 }}>
                                { title }
                            </Text>
                        </View>
                    )
                },
            })}
        >
            <Tab.Screen name="HomeScreen" options={{ title: '' }} component={ HomeScreen as any } />
            <Tab.Screen name="ProfileScreen" options={{ title: '' }} component={ ProfileScreen } />
        </Tab.Navigator>
    )
}