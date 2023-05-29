import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { stylesHeader } from '../styles'
import { LevelContext } from '../context/LevelContext'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'

interface Props {
    title: string
    navigation: StackNavigationProp<RootStackParams, "SecretMissionScreen", undefined>
}

export const HeaderSecretMission = ({ title, navigation }: Props) => {
    const { saveLevel, saveMission } = useContext(LevelContext)
    
    const handleBack = () => {
        saveLevel(null, null)
        saveMission(null)
        navigation.replace('LevelsScreen')
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
