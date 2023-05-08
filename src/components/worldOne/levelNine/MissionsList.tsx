import React, { useContext, useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '../../../navigator/Navigator'
import { LevelContext } from '../../../context/LevelContext'

import { stylesMissionsList } from '../../../styles'
import { useAppSelector } from '../../../redux/hooks'

interface Props {
    navigation: StackNavigationProp<RootStackParams, "MissionsListScreen", undefined>
    missionTitle?: string
}

export const MissionsListLevel9 = ({ navigation }: Props) => {
    const authentication = useAppSelector((state) => state.userReducer)

    const { saveMission, saveMissions } = useContext(LevelContext)

    useEffect(() => {
        saveMissions([
            {
                title: 'DESCUBRE LOS PROGRAMAS INTERNACIONALES PARA TU CARRERA',
                description: 'Motívate a participar de los programas internacionales y estudia en el extranjero.'
            },
            {
                title: 'CONOCE LA OFICINA INTERNACIONAL DE TU CAMPUS',
                description: 'Recibe con detalle toda la información que necesitas sobre los programas internacionales en la Oficina Internacional de tu campus.'
            }
        ])
    }, [])

    const handleMission = (mission: number, nextMissionTitleBoolean: boolean) => {
        saveMission(mission)

        if (navigation) {
            navigation.replace('MissionScreen', { nextMissionTitleBoolean })
        }
    }

    return (
        <>
            <TouchableOpacity
                style={ stylesMissionsList.missionCard }
                activeOpacity={ 1 }
                onPress={ () => handleMission(1, false) }
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
                            authentication.missions.find(mission => mission.data.numberMission === 1)
                            ? stylesMissionsList.missionCircleFinished
                            : stylesMissionsList.missionCirclePending
                        }></View>
                        <Text style={ stylesMissionsList.missionTagTextPending }>
                            {
                                authentication.missions.find(mission => mission.data.numberMission === 1)
                                ? 'TERMINADO'
                                : 'POR HACER'
                            }
                        </Text>
                    </View>
                    <Text style={ stylesMissionsList.missionTitle }>DESCUBRE LOS PROGRAMAS INTERNACIONALES PARA TU CARRERA</Text>
                    <Text style={ stylesMissionsList.missionNumberText }>Misión 1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={[
                    stylesMissionsList.missionCard,
                    authentication.levels.find(level => level.numberLevel! === 9)?.completedMissions! < 1 ? stylesMissionsList.missionCardLocked : null
                ]}
                disabled={ authentication.levels.find(level => level.numberLevel! === 9)?.completedMissions! < 1 }
                onPress={ () => handleMission(2, false) }
            >
                {
                    authentication.missions.find(mission => mission.data.numberMission === 2)
                    ? (
                        <Image
                            source={ require('../../../assets/mission-finished.png') }
                            style={{ width: 24, height: 24 }}
                        />
                    )
                    : authentication.levels.find(level => level.numberLevel! === 9)?.completedMissions! < 1
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
                        : authentication.levels.find(level => level.numberLevel! === 9)?.completedMissions! < 1
                        ? stylesMissionsList.missionTagLocked
                        : stylesMissionsList.missionTagPending
                    ]}>
                        <View style={
                            authentication.missions.find(mission => mission.data.numberMission === 2)
                            ? stylesMissionsList.missionCircleFinished
                            : authentication.levels.find(level => level.numberLevel! === 9)?.completedMissions! < 1
                            ? stylesMissionsList.missionCircleLocked
                            : stylesMissionsList.missionCirclePending
                        }></View>
                        <Text style={
                            authentication.missions.find(mission => mission.data.numberMission === 2)
                            ? stylesMissionsList.missionTagTextFinished
                            : authentication.levels.find(level => level.numberLevel! === 9)?.completedMissions! < 1
                            ? stylesMissionsList.missionTagTextLocked
                            : stylesMissionsList.missionTagTextPending
                        }>
                            {
                                authentication.missions.find(mission => mission.data.numberMission === 2)
                                ? 'TERMINADO'
                                : authentication.levels.find(level => level.numberLevel! === 9)?.completedMissions! < 1
                                ? 'BLOQUEADO'
                                : 'POR HACER'
                            }
                        </Text>
                    </View>
                    <Text style={ stylesMissionsList.missionTitle }>CONOCE LA OFICINA INTERNACIONAL DE TU CAMPUS</Text>
                    <Text style={ stylesMissionsList.missionNumberText }>Misión 2</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}
