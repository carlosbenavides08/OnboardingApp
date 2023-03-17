import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '../../../navigator/Navigator'
import { LevelContext } from '../../../context/LevelContext'

import { stylesMissionsList } from '../../../styles'

interface Props {
    navigation: StackNavigationProp<RootStackParams, "MissionsListScreen", undefined>
}

export const MissionsList = ({ navigation }: Props) => {

    const { saveMission } = useContext(LevelContext)

    const handleMission = (mission: number) => {
        if (navigation) {
            navigation.navigate('MissionScreen')
        }
        saveMission(mission)
    }

    return (
        <>
            <TouchableOpacity
                style={ stylesMissionsList.missionCard }
                activeOpacity={ 1 }
                onPress={ () => handleMission(1) }
            >
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
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={[
                    stylesMissionsList.missionCard,
                    stylesMissionsList.missionCardLocked
                ]}
                onPress={ () => handleMission(2) }
            >
                <Image
                    source={ require('../../../assets/mission-locked.png') }
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
                    <Text style={ stylesMissionsList.missionTitle }>ASISTE A TUS CLASES SIN INCONVENIENTES</Text>
                    <Text style={ stylesMissionsList.missionNumberText }>Misión 2</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={[
                    stylesMissionsList.missionCard,
                    stylesMissionsList.missionCardLocked
                ]}
                onPress={ () => handleMission(3) }
            >
                <Image
                    source={ require('../../../assets/mission-locked.png') }
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
                    <Text style={ stylesMissionsList.missionNumberText }>Misión 3</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}
