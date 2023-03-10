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
                    borderWidth: 1,
                    borderColor: 'red',
                    // alignSelf: 'flex-start',
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 68,
                    padding: 0,
                    margin: 0,
                },
                tabBarIconStyle: {
                    position: 'absolute',
                    marginTop: 0,
                    borderWidth: 1,
                    borderColor: 'green',
                    justifyContent: 'flex-start',
                    height: 68,
                    width: 60,
                },
                tabBarLabelStyle: {
                    fontFamily: 'WhitneyHTF-Bold',
                    fontSize: 10,
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
                        <View style={{ position: 'absolute', borderWidth: 1, top: 0 }}>
                            {
                                focused
                                ? (
                                    <Image
                                        source={ require('../assets/indicator.png') }
                                        style={{ width: 24, height: 4, top: 0 }}
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
                                            style={{ position: 'absolute', width: 26, height: 23, marginTop: 20, marginLeft: -1 }}
                                        />
                                    ) : (
                                        <Image
                                            source={ require('../assets/home-icon-unselected.png') }
                                            style={{ position: 'absolute', width: 26, height: 23, marginTop: 20, marginLeft: -1 }}
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
                                            style={{ width: 22, height: 24, marginTop: 20, marginLeft: 1 }}
                                        />
                                    ) : (
                                        <Image
                                            source={ require('../assets/profile-icon-unselected.png') }
                                            style={{ width: 22, height: 24, marginTop: 20, marginLeft: 1 }}
                                        />
                                    )
                                : null
                            }
                            <Text style={{ position: 'absolute', color, fontFamily: 'WhitneyHTF-Bold', fontSize: 10, lineHeight: 16, marginTop: 5 }}>
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