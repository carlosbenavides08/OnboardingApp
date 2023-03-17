import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'

import { RootStackParams } from '../navigator/Navigator'
import { Header } from '../components/Header'
import { LevelContext } from '../context/LevelContext'
import { MissionsList } from '../components/worldOne/levelOne/MissionsList'

import { stylesMissionsList } from '../styles'

interface Props extends StackScreenProps<RootStackParams, 'MissionsListScreen'>{}

export const MissionsListScreen = ({ navigation }: Props) => {

    const { level, totalMissions } = useContext(LevelContext)

    return (
        <SafeAreaView style={ stylesMissionsList.missionsContainer }>
            <ScrollView>
                <Header title='NIVEL 1: INICIA TU PRIMER CICLO' />
                <View style={ stylesMissionsList.medalWrapper }>
                    <Image
                        source={ require('../assets/start-level.png') }
                        style={{ width: 80, height: 80 }}
                    />
                    <View style={ stylesMissionsList.medalDetailWrapper }>
                        <Text style={ stylesMissionsList.medalText }>MEDALLA</Text>
                        <Text style={ stylesMissionsList.medalTitle }>El gran inicio</Text>
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
                        <MissionsList
                            navigation={ navigation }
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
