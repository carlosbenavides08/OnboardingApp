import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { stylesLevels } from '../styles'

type Position = 'absolute'

interface Props {
    levelStyle: {
        position: Position
        top: number
        left?: number
        right?: number
    }
    levelTitle: string
    levelDescription: string
    completedMissions?: string | null
    totalMissions?: string | null
    enable?: boolean
    subsequent?: boolean
}

export const Level = ({ levelStyle, levelTitle, levelDescription, completedMissions, totalMissions, enable = true, subsequent = false }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={ 1 }
            style={[
                stylesLevels.levelContent,
                levelStyle
            ]}
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
            <Text style={[ stylesLevels.textLevel, !enable ? stylesLevels.textLevelLocked : null ]}>{ levelTitle }</Text>
            <Text style={[ stylesLevels.textLevelDescription, !enable ? stylesLevels.textLevelLocked : null ]}>{ levelDescription }</Text>
            {
                !subsequent
                ? (
                    <Text style={ stylesLevels.textMissionsCompleted }>{ completedMissions }
                        <Text style={ stylesLevels.textMissionsTotal }>/{ totalMissions } Misiones</Text>
                    </Text>
                ) : (
                    <View style={ stylesLevels.lockedMissionsWrapper }>
                        <Image
                            source={ require('../assets/locked.png') }
                            style={{ width: 16, height: 12 }}
                        />
                        <Text style={ stylesLevels.lockedMissionsText }>Misiones</Text>
                    </View>
                )
            }
        </TouchableOpacity>
    )
}
