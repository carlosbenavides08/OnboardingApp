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
    medal?: string
    completedMissions?: string
    totalMissions?: number
    enable?: boolean
    subsequent?: boolean
    setActiveMessage: React.Dispatch<React.SetStateAction<boolean>>
    navigation?: StackNavigationProp<RootStackParams, 'LevelsScreen'> | undefined
}

export const Level = ({ levelStyle, number, levelTitle, levelDescription, medal = '', completedMissions = '0', totalMissions = 1, enable = true, subsequent = false, setActiveMessage, navigation }: Props) => {

    const { saveLevel, saveLevelTitle, saveMedal } = useContext(LevelContext)

    const handleLevel = (level: number, totalMissions: number, title: string, description: string) => {
        if (navigation) {
            saveLevel(level, totalMissions)
            saveLevelTitle(`${ title }: ${ description }`)
            saveMedal(medal)
            navigation.replace('MissionsListScreen')
        }

        if (!enable) {
            setActiveMessage(true)
        }
    }

    return (
        <TouchableOpacity
            activeOpacity={ 1 }
            style={[
                stylesLevel.levelContent,
                levelStyle
            ]}
            onPress={ () => handleLevel(number, totalMissions, levelTitle, levelDescription) }
        >
            {
                Number(completedMissions) === Number(totalMissions)
                ? (
                    <Image
                        source={ require('../assets/finished-level.png') }
                        style={{ width: 80, height: 80 }}
                    />
                )
                : Number(completedMissions) > 0
                ? (
                    <Image
                        source={ require('../assets/progress-level.png') }
                        style={{ width: 80, height: 80 }}
                    />
                )
                : enable
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
