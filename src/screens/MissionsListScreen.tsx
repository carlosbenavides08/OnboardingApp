import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'

import { RootStackParams } from '../navigator/Navigator'
import { Header } from '../components/Header'
import { LevelContext } from '../context/LevelContext'
import { MissionsListLevel1 } from '../components/worldOne/levelOne/MissionsList';

import { stylesMissionsList } from '../styles'
import { MissionsListLevel2 } from '../components/worldOne/levelTwo/MissionsList'

interface Props extends StackScreenProps<RootStackParams, 'MissionsListScreen'>{}

export const MissionsListScreen = ({ route, navigation }: Props) => {

    const { level } = useContext(LevelContext)

    console.log(route.params.description)

    return (
        <SafeAreaView style={ stylesMissionsList.missionsContainer }>
            <ScrollView>
                <Header
                    title={ `NIVEL ${ level }: ${ (route.params.description).length > 30 ? `${ route.params.description.substring(0, 30) }...` : route.params.description }` }
                    navigation={ navigation }
                    description={ route.params.description }
                />
                <View style={ stylesMissionsList.medalWrapper }>
                    <Image
                        source={ require('../assets/start-level.png') }
                        style={{ width: 80, height: 80 }}
                    />
                    <View style={ stylesMissionsList.medalDetailWrapper }>
                        <Text style={ stylesMissionsList.medalText }>MEDALLA</Text>
                        <Text style={ stylesMissionsList.medalTitle }>{ `Nivel ${ level }` }</Text>
                        <Text style={ stylesMissionsList.medalDescription }>¡Completa las misiones y vive la experiencia UPC!</Text>
                    </View>
                </View>
                <View style={ stylesMissionsList.missionsBody }>
                    <Text style={ stylesMissionsList.listTitle }>LISTA DE MISIONES</Text>
                    <View style={ stylesMissionsList.disclaimerCard }>
                        <Image
                            source={ require('../assets/disclaimer-icon.png') }
                            style={{ width: 15, height: 15 }}
                        />
                        <Text style={ stylesMissionsList.disclaimerText }>Al terminar la primera misión desbloquearás las siguientes de este nivel.</Text>
                    </View>
                    <View style={ stylesMissionsList.missionList }>
                        {
                            level === 1 && (
                                <MissionsListLevel1
                                    navigation={ navigation }
                                    levelTitle={ route.params.description }
                                />
                            )
                        }
                        {
                            level === 2 && (
                                <MissionsListLevel2
                                    navigation={ navigation }
                                    levelTitle={ route.params.description }
                                />
                            )
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
