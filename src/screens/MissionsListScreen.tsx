import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'

import { RootStackParams } from '../navigator/Navigator'
import { Header } from '../components/Header'
import { LevelContext } from '../context/LevelContext'
import { MissionsListLevel1 } from '../components/worldOne/levelOne/MissionsList';

import { stylesMissionsList } from '../styles'
import { MissionsListLevel2 } from '../components/worldOne/levelTwo/MissionsList'
import mundoApi from '../api/mundoApi'
import { User } from '../interfaces/User'
import { setLevels, setMissions } from '../redux/slices/user'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Mission } from '../interfaces/Mission'

interface Props extends StackScreenProps<RootStackParams, 'MissionsListScreen'>{}

export const MissionsListScreen = ({ route, navigation }: Props) => {
    const dispatch = useAppDispatch()
    const { levels } = useAppSelector((state) => state.userReducer)

    const { level } = useContext(LevelContext)

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

    return (
        <SafeAreaView style={ stylesMissionsList.missionsContainer }>
            <ScrollView>
                <Header
                    title={ `NIVEL ${ level }: ${ (route.params.description).length > 30 ? `${ route.params.description.substring(0, 30) }...` : route.params.description }` }
                    navigation={ navigation }
                />
                <View style={ stylesMissionsList.medalWrapper }>
                    {
                        levels.map(level => level.numberLevel === 1 && level.status === 'COMPLETED')
                        ? (
                            <Image
                                source={ require('../assets/finished-level.png') }
                                style={{ width: 80, height: 80 }}
                            />
                        )
                        : levels.map(level => level.numberLevel === 1 && level.status === 'PROGRESS')
                        ? (
                            <Image
                                source={ require('../assets/progress-level.png') }
                                style={{ width: 80, height: 80 }}
                            />
                        )
                        : (
                            <Image
                                source={ require('../assets/start-level.png') }
                                style={{ width: 80, height: 80 }}
                            />
                        )
                    }
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
