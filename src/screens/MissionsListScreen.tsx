import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'

import { RootStackParams } from '../navigator/Navigator'
import { Header } from '../components/Header'

import { stylesMissionsList } from '../styles/missionsList'

interface Props extends StackScreenProps<RootStackParams, 'MissionsListScreen'>{}

export const MissionsListScreen = (_: Props) => {
    return (
        <SafeAreaView style={ stylesMissionsList.missionsContainer }>
            <ScrollView>
                <Header title='N1: INICIA TU PRIMER CICLO'/>
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
                        <View style={ stylesMissionsList.missionCard }>
                            <View style={ stylesMissionsList.missionCircleEnable }></View>
                            <View>
                                <View style={[
                                    stylesMissionsList.missionTag,
                                    stylesMissionsList.missionTagPending
                                ]}>
                                    <View style={ stylesMissionsList.missionCirclePending }></View>
                                    <Text style={ stylesMissionsList.missionTagText }>POR HACER</Text>
                                </View>
                                <Text style={ stylesMissionsList.missionTitle }>CONÉCTATE CON LA UNIVERSIDAD</Text>
                                <Text style={ stylesMissionsList.missionNumberText }>Misión 1</Text>
                            </View>
                        </View>
                        <View style={[
                            stylesMissionsList.missionCard,
                            stylesMissionsList.missionCardLocked
                        ]}>
                            <Image
                                source={ require('../assets/mission-locked.png') }
                                style={{ width: 24, height: 24 }}
                            />
                            <View>
                                <View style={[
                                    stylesMissionsList.missionTag,
                                    stylesMissionsList.missionTagLocked
                                ]}>
                                    <View style={ stylesMissionsList.missionCircleLocked }></View>
                                    <Text style={ stylesMissionsList.missionTagText }>BLOQUEADO</Text>
                                </View>
                                <Text style={ stylesMissionsList.missionTitle }>ASISTE A TU PRIMER DÍA DE CLASES</Text>
                                <Text style={ stylesMissionsList.missionNumberText }>Misión 1</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
