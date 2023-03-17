import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { LevelContext } from '../context/LevelContext'
import { useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../navigator/Navigator'
import { StackNavigationProp } from '@react-navigation/stack'

import { stylesFinishedMission } from '../styles'

interface Props {
    navigation: StackNavigationProp<RootStackParams, "MissionScreen", undefined>
}

export const FinishedMission = ({ navigation }: Props) => {

    const { level, mission, totalMissions, saveMission } = useContext(LevelContext)

    console.log('Mision', mission)
    console.log('Total', totalMissions)

    const handleNavigation = () => {
        if (mission! < totalMissions!) {
            navigation.replace('MissionScreen')
            saveMission(mission! + 1)
        } else {
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
