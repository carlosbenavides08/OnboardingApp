import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { RootStackParams } from '../navigator/Navigator'
import { StackNavigationProp } from '@react-navigation/stack'
import { LevelContext } from '../context/LevelContext'

import { stylesLevel } from '../styles'

type Position = 'absolute'

interface Props {
    levelStyle: {
        position: Position
        top: number
        left?: number
        right?: number
    }
    number: number
    levelTitle: string
    levelDescription: string
    completedMissions?: string | null
    totalMissions?: number
    enable?: boolean
    subsequent?: boolean
    navigation?: StackNavigationProp<RootStackParams, 'LevelsScreen'> | undefined
}

export const Level = ({ levelStyle, number, levelTitle, levelDescription, completedMissions, totalMissions = 1, enable = true, subsequent = false, navigation }: Props) => {

    const { saveLevel } = useContext(LevelContext)

    const handleLevel = (level: number, totalMissions: number) => {
        if (navigation) {
            navigation.navigate('MissionsListScreen')
        }
        saveLevel(level, totalMissions)
    }

    return (
        <TouchableOpacity
            activeOpacity={ 1 }
            style={[
                stylesLevel.levelContent,
                levelStyle
            ]}
            onPress={ () => handleLevel(number, totalMissions) }
        >
            {
                enable
                ? (
                    <Image
                        source={ require('../assets/start-level.png') }
                        style={{ width: 80, height: 80 }}
                    />
                ) : (
                    <Image
                        source={ require('../assets/locked-level.png') }
                        style={{ width: 80, height: 80 }}
                    />
                )
            }
            <Text style={[ stylesLevel.textLevel, !enable ? stylesLevel.textLevelLocked : null ]}>{ levelTitle }</Text>
            <Text style={[ stylesLevel.textLevelDescription, !enable ? stylesLevel.textLevelLocked : null ]}>{ levelDescription }</Text>
            {
                !subsequent
                ? (
                    <Text style={ stylesLevel.textMissionsCompleted }>
                        { completedMissions }
                        <Text style={ stylesLevel.textMissionsTotal }>/{ totalMissions } Misiones</Text>
                    </Text>
                ) : (
                    <View style={ stylesLevel.lockedMissionsWrapper }>
                        <Image
                            source={ require('../assets/locked.png') }
                            style={{ width: 16, height: 12 }}
                        />
                        <Text style={ stylesLevel.lockedMissionsText }>Misiones</Text>
                    </View>
                )
            }
        </TouchableOpacity>
    )
}
