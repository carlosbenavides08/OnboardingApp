import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '../../../../navigator/Navigator'
import { LevelContext } from '../../../../context/LevelContext'

interface Props {
    // missionDescription: string
    navigation: StackNavigationProp<RootStackParams, "LevelsScreen", undefined>
}

export const Mission2 = ({ navigation }: Props) => {

    const { saveLevel, saveMission } = useContext(LevelContext)

    const handleClick = () => {
        saveLevel(12, 1)
        saveMission(1)
        navigation.replace('SecretMissionScreen',
            {
                title: 'CALIFICA TUS CURSOS Y PROFESORES',
                description: 'Cuéntanos cómo van tus clases hasta el momento para seguir mejorándolas.'
            }
        )
    }

    return (
        <TouchableOpacity
            style={ styles.cardContainer }
            activeOpacity={ 1 }
            onPress={ handleClick }
        >
            <Image
                source={ require('../../../../assets/secret-image.png') }
                style={{ width: 64, height: 72 }}
            />
            <View>
                <Text style={ styles.cardTitle }>MEDALLA ESPECIAL II</Text>
                <Text style={ styles.cardSubtitle }>¡Misión secreta! 🕵️‍♂️</Text>
                <Text style={ styles.cardLimit }>Realízala hasta el 25 de Junio</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 40,
        shadowColor: "#AAA",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        overflow: 'hidden',
    },
    cardTitle: {
        color: '#191919',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 12,
    },
    cardSubtitle: {
        color: 'black',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 20,
        lineHeight: 32,
    },
    cardLimit: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 14,
        marginTop: 4,
    }
})
