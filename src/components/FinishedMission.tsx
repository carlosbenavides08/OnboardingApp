import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { LevelContext } from '../context/LevelContext'
import { RootStackParams } from '../navigator/Navigator'
import { StackNavigationProp } from '@react-navigation/stack'

import { stylesFinishedMission } from '../styles'

interface Props {
    navigation: StackNavigationProp<RootStackParams, "MissionScreen", undefined>
}

export const FinishedMission = ({ navigation }: Props) => {

    const { level, mission, totalMissions, saveLevel, saveMission } = useContext(LevelContext)

    const handleNavigation = () => {
        if (mission! < totalMissions!) {
            saveMission(mission! + 1)
            navigation.replace('MissionScreen', { nextMissionTitleBoolean: true })
        } else {
            saveLevel(null, null)
            saveMission(null)
            navigation.replace('LevelsScreen')
        }
    }

    return (
        <>
            <View style={ stylesFinishedMission.contaner }>
                <Text style={ stylesFinishedMission.title }>
                    {
                        mission === totalMissions
                        ? '¡NIVEL COMPLETADO!'
                        : '¡MISIÓN COMPLETADA!'
                    }
                </Text>
                <View style={ stylesFinishedMission.missionsContainer }>
                    <Text style={ stylesFinishedMission.missionsText }>
                        Lograste
                        <Text style={{ color: '#E50A17' }}> { mission }/{ totalMissions } </Text>
                        misiones
                    </Text>
                </View>
                <Text style={ stylesFinishedMission.secondaryText }>
                    {
                        mission === totalMissions
                        ? '¡Felicidades! Estás logrando adaptarte a la vida universitaria.'
                        : '¡Sigue así y aprende más de la vida universitaria!'
                    }
                </Text>
            </View>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={ stylesFinishedMission.button }
                onPress={ handleNavigation }
            >
                <Text style={ stylesFinishedMission.buttonText }>
                    {
                        mission === totalMissions
                        ? `Ir al nivel ${ level! + 1 }`
                        : 'Completar nueva misión'
                    }
                </Text>
            </TouchableOpacity>
        </>
    )
}
