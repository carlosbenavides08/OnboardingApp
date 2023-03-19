import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { stylesHeader } from '../styles'
import { LevelContext } from '../context/LevelContext'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'

interface Props {
    title: string
    levelTitle?: string
    navigation: StackNavigationProp<RootStackParams, "LevelsScreen", undefined>
                | StackNavigationProp<RootStackParams, "MissionsListScreen", undefined>
                | StackNavigationProp<RootStackParams, "MissionScreen", undefined>
    description?: string
}

export const Header = ({ title, levelTitle, description = '', navigation }: Props) => {
    const { level, mission, saveLevel, saveMission } = useContext(LevelContext)
    
    const handleBack = () => {
        if (!level && !mission) navigation.replace('TabsHome')

        if (level && !mission) {
            saveLevel(null, null)
            navigation.replace('LevelsScreen')
        }

        if (level && mission) {
            navigation.replace('MissionsListScreen', { title: levelTitle!, description: levelTitle! })
            saveMission(null)
        }
    }

    return (
        <View style={ stylesHeader.header }>
            <TouchableOpacity
                onPress={ handleBack }
                activeOpacity={ 1 }
            >
                <Image
                    source={ require('../assets/back-icon.png') }
                    style={{ width: 32, height: 32 }}
                />
            </TouchableOpacity>
            <Text style={ stylesHeader.headerText }>{ title }</Text>
        </View>
    )
}
