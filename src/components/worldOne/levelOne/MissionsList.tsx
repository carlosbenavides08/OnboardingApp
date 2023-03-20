import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '../../../navigator/Navigator'
import { LevelContext } from '../../../context/LevelContext'

import { stylesMissionsList } from '../../../styles'
import { useAppSelector } from '../../../redux/hooks'

interface Props {
    navigation: StackNavigationProp<RootStackParams, "MissionsListScreen", undefined>
    levelTitle: string
    missionTitle?: string
}

export const MissionsListLevel1 = ({ navigation, levelTitle }: Props) => {
    const authentication = useAppSelector((state) => state.userReducer)

    const { saveMission } = useContext(LevelContext)

    const handleMission = (mission: number, missionTitle: string, nextMissionTitle: string | null, nextMissionTitleBoolean: boolean, description: string) => {
        if (navigation) {
            navigation.replace('MissionScreen', { levelTitle, missionTitle, nextMissionTitle, nextMissionTitleBoolean, description })
        }
        saveMission(mission)
    }

    return (
        <>
            <TouchableOpacity
                style={ stylesMissionsList.missionCard }
                activeOpacity={ 1 }
                onPress={ () => handleMission(1, 'CONÉCTATE CON LA UNIVERSIDAD', 'ASISTE A TUS CLASES SIN INCONVENIENTES', false, 'Conoce los canales digitales primordiales para comenzar tus clases sin inconvenientes.') }
            >
                {
                    authentication.missions.find(mission => mission.data.numberMission === 1)
                    ? (
                        <Image
                            source={ require('../../../assets/mission-finished.png') }
                            style={{ width: 24, height: 24 }}
                        />
                    )
                    : (
                        <View style={ stylesMissionsList.missionCircleEnable }></View>
                    )
                }
                <View>
                    <View style={[
                        stylesMissionsList.missionTag,
                        authentication.missions.find(mission => mission.data.numberMission === 1)
                        ? stylesMissionsList.missionTagFinished
                        : stylesMissionsList.missionTagPending
                    ]}>
                        <View style={
                            authentication.missions.find(mission => mission.data.numberMission === 1) ? stylesMissionsList.missionCircleFinished : stylesMissionsList.missionCirclePending
                        }></View>
                        <Text style={ stylesMissionsList.missionTagTextPending }>
                            {
                                authentication.missions.find(mission => mission.data.numberMission === 1)
                                ? 'TERMINADO'
                                : 'POR HACER'
                            }
                        </Text>
                    </View>
                    <Text style={ stylesMissionsList.missionTitle }>CONÉCTATE CON LA UNIVERSIDAD</Text>
                    <Text style={ stylesMissionsList.missionNumberText }>Misión 1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={[
                    stylesMissionsList.missionCard,
                    authentication.levels.find(level => level.numberLevel! === 1)?.completedMissions! < 1 ? stylesMissionsList.missionCardLocked : null
                ]}
                disabled={ authentication.levels.find(level => level.numberLevel! === 1)?.completedMissions! < 1 }
                onPress={ () => handleMission(2, 'ASISTE A TUS CLASES SIN INCONVENIENTES', 'ASISTE A TU PRIMER DÍA DE CLASES', false, 'Prepárate para asistir a todas las clases de tu primer ciclo.') }
            >
                {
                    authentication.missions.find(mission => mission.data.numberMission === 2)
                    ? (
                        <Image
                            source={ require('../../../assets/mission-finished.png') }
                            style={{ width: 24, height: 24 }}
                        />
                    )
                    : authentication.levels.find(level => level.numberLevel! === 1)?.completedMissions! < 1
                    ? (
                        <Image
                            source={ require('../../../assets/mission-locked.png') }
                            style={{ width: 24, height: 24 }}
                        />
                    ) : (
                        <View style={ stylesMissionsList.missionCircleEnable }></View>
                    )
                }
                <View>
                    <View style={[
                        stylesMissionsList.missionTag,
                        authentication.missions.find(mission => mission.data.numberMission === 2)
                        ? stylesMissionsList.missionTagFinished
                        : authentication.levels.find(level => level.numberLevel! === 1)?.completedMissions! < 1
                        ? stylesMissionsList.missionTagLocked
                        : stylesMissionsList.missionTagPending
                    ]}>
                        <View style={ stylesMissionsList.missionCircleLocked }></View>
                        <Text style={
                            authentication.missions.find(mission => mission.data.numberMission === 2)
                            ? stylesMissionsList.missionTagTextFinished
                            : authentication.levels.find(level => level.numberLevel! === 1)?.completedMissions! < 1
                            ? stylesMissionsList.missionTagTextLocked
                            : stylesMissionsList.missionTagTextPending
                        }>
                            {
                                authentication.missions.find(mission => mission.data.numberMission === 2)
                                ? 'TERMINADO'
                                : authentication.levels.find(level => level.numberLevel! === 1)?.completedMissions! < 1
                                ? 'BLOQUEADO'
                                : 'POR HACER'
                            }
                        </Text>
                    </View>
                    <Text style={ stylesMissionsList.missionTitle }>ASISTE A TUS CLASES SIN INCONVENIENTES</Text>
                    <Text style={ stylesMissionsList.missionNumberText }>Misión 2</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={[
                    stylesMissionsList.missionCard,
                    authentication.levels.find(level => level.numberLevel! === 1)?.completedMissions! < 2 ? stylesMissionsList.missionCardLocked : null
                ]}
                disabled={ authentication.levels.find(level => level.numberLevel! === 1)?.completedMissions! < 2 }
                onPress={ () => handleMission(3, 'ASISTE A TU PRIMER DÍA DE CLASES', '', false, 'Conoce las fechas importantes de tu ciclo académico 2023-1.') }
            >
                {
                    authentication.missions.find(mission => mission.data.numberMission === 3)
                    ? (
                        <Image
                            source={ require('../../../assets/mission-finished.png') }
                            style={{ width: 24, height: 24 }}
                        />
                    )
                    : authentication.levels.find(level => level.numberLevel! === 1)?.completedMissions! < 2
                    ? (
                        <Image
                            source={ require('../../../assets/mission-locked.png') }
                            style={{ width: 24, height: 24 }}
                        />
                    ) : (
                        <View style={ stylesMissionsList.missionCircleEnable }></View>
                    )
                }
                <View>
                    <View style={[
                        stylesMissionsList.missionTag,
                        authentication.missions.find(mission => mission.data.numberMission === 3)
                        ? stylesMissionsList.missionTagFinished
                        : authentication.levels.find(level => level.numberLevel! === 1)?.completedMissions! < 2
                        ? stylesMissionsList.missionTagLocked
                        : stylesMissionsList.missionTagPending
                    ]}>
                        <View style={ stylesMissionsList.missionCircleLocked }></View>
                        <Text style={ stylesMissionsList.missionTagTextPending }>
                            {
                                authentication.missions.find(mission => mission.data.numberMission === 3)
                                ? 'TERMINADO'
                                : authentication.levels.find(level => level.numberLevel! === 1)?.completedMissions! < 2
                                ? 'BLOQUEADO'
                                : 'POR HACER'
                            }
                        </Text>
                    </View>
                    <Text style={ stylesMissionsList.missionTitle }>ASISTE A TU PRIMER DÍA DE CLASES</Text>
                    <Text style={ stylesMissionsList.missionNumberText }>Misión 3</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}
