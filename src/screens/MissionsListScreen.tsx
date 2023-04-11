import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'

import { RootStackParams } from '../navigator/Navigator'
import { Header } from '../components/Header'
import { LevelContext } from '../context/LevelContext';
import { MissionsListLevel1 } from '../components/worldOne/levelOne/MissionsList';

import { stylesMissionsList } from '../styles'
import { MissionsListLevel2 } from '../components/worldOne/levelTwo/MissionsList'
import { setLevels, setMissions } from '../redux/slices/user'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { loadLevelsBack, loadMissionsBack } from '../hooks/loadData'
import { MissionsListLevel3 } from '../components/worldOne/levelThree/MissionsList'
import { MissionsListLevel4 } from '../components/worldOne/levelFour/MissionsList'
import { MissionsListLevel5 } from '../components/worldOne/levelFive/MissionsList'
import { MissionsListLevel6 } from '../components/worldOne/LevelSix/MissionsList'

interface Props extends StackScreenProps<RootStackParams, 'MissionsListScreen'>{}

export const MissionsListScreen = ({ navigation }: Props) => {
    const dispatch = useAppDispatch()
    const { levels } = useAppSelector((state) => state.userReducer)
    const { levelTitle, medal } = useContext(LevelContext)

    const { level } = useContext(LevelContext)

    useEffect(() => {
        loadLevels()
    }, [])

    useEffect(() => {
        loadMissions()
    }, [])

    const loadLevels = async() => {
        const levels = await loadLevelsBack()
        dispatch(setLevels(levels!))
    }

    const loadMissions = async() => {
        const missions = await loadMissionsBack(level!)
        dispatch(setMissions(missions!))
    }

    return (
        <SafeAreaView style={ stylesMissionsList.missionsContainer }>
            <ScrollView>
                <Header
                    title={ levelTitle.length >= 40 ? `${ levelTitle.substring(0, 40) }...` : levelTitle }
                    navigation={ navigation }
                />
                <View style={ stylesMissionsList.medalWrapper }>
                    {
                        levels.find(lev => lev.numberLevel === level)?.status === 'COMPLETED'
                        ? (
                            <Image
                                source={ require('../assets/finished-level.png') }
                                style={{ width: 80, height: 80 }}
                            />
                        )
                        : levels.find(level => level.numberLevel === level)?.status === 'PROGRESS'
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
                        <Text style={ stylesMissionsList.medalTitle }>{ medal }</Text>
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
                                />
                            )
                        }
                        {
                            level === 2 && (
                                <MissionsListLevel2
                                    navigation={ navigation }
                                />
                            )
                        }
                        {
                            level === 3 && (
                                <MissionsListLevel3
                                    navigation={ navigation }
                                />
                            )
                        }
                        {
                            level === 4 && (
                                <MissionsListLevel4
                                    navigation={ navigation }
                                />
                            )
                        }
                        {
                            level === 5 && (
                                <MissionsListLevel5
                                    navigation={ navigation }
                                />
                            )
                        }
                        {
                            level === 6 && (
                                <MissionsListLevel6
                                    navigation={ navigation }
                                />
                            )
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
