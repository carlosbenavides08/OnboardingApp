import React, { useContext, useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '../../../navigator/Navigator'
import { LevelContext } from '../../../context/LevelContext'

import { stylesMissionsList } from '../../../styles'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import AsyncStorage from '@react-native-async-storage/async-storage'
import mundoApi from '../../../api/mundoApi'
import { setLevels, setMissions } from '../../../redux/slices/user'
import { Mission } from '../../../interfaces/Mission'
import { User } from '../../../interfaces/User'

interface Props {
    navigation: StackNavigationProp<RootStackParams, "MissionsListScreen", undefined>
    levelTitle: string
}

export const MissionsListLevel1 = ({ navigation, levelTitle }: Props) => {
    const dispatch = useAppDispatch()
    const authentication = useAppSelector((state) => state.userReducer)

    const { level, saveMission } = useContext(LevelContext)

    useEffect(() => {
        loadLevels()
    }, [])

    useEffect(() => {
        loadMissions()
    }, [])

    const loadLevels = async() => {
        try {
            const user = await AsyncStorage.getItem('studentCode')
            const { data } = await mundoApi.post<User>('/auth/login', { studentCode: user })
            const levels = data.data.map(level => level.data)
            dispatch(setLevels(levels))
        } catch (error) {
            console.log(error)
        }
    }

    const loadMissions = async() => {
        try {
            const user = await AsyncStorage.getItem('studentCode')
            const { data } = await mundoApi.post<Mission>('/level/list-mission', { studentCode: user, numberLevel: level })
            const missions = data.data.map(mission => mission)
            dispatch(setMissions(missions))
        } catch (error) {
            console.log(error)
        }
    }

    const handleMission = (mission: number, description: string) => {
        if (navigation) {
            navigation.replace('MissionScreen', { levelTitle, description })
        }
        saveMission(mission)
    }

    return (
        <>
            <TouchableOpacity
                style={ stylesMissionsList.missionCard }
                activeOpacity={ 1 }
                onPress={ () => handleMission(1, 'Conoce los canales digitales primordiales para comenzar tus clases sin inconvenientes.') }
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
                onPress={ () => handleMission(2, 'Prepárate para asistir a todas las clases de tu primer ciclo.') }
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
                onPress={ () => handleMission(3, 'Conoce las fechas importantes de tu ciclo académico 2023-1.') }
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