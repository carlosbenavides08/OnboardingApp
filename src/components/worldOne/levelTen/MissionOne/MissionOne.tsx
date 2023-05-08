import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { FloatingLabelInput } from 'react-native-floating-label-input'

import { LevelContext } from '../../../../context/LevelContext'

interface Props {
    setQualify: React.Dispatch<React.SetStateAction<boolean>>
    setShowQuestion: React.Dispatch<React.SetStateAction<boolean>>
}

export const MissionOneLevelTen = ({ setQualify, setShowQuestion }: Props) => {
    const { saveMissionResponse } = useContext(LevelContext)

    const [error, setError] = useState(false)
    const [text, setText] = useState('')

    const finishMission = () => {
        saveMissionResponse(text)
        setQualify(true)
        setShowQuestion(false)
    }

    const validateText = (value: string) => {
        setText(value)
        if (value.length >= 100) {
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <>
            <Text style={ stylesMissionOne.question }>
                ¿Crees que esta información te ayudará durante tus últimas semanas del ciclo? ¿Por qué?
            </Text>
            <View style={ stylesMissionOne.response }>
                <FloatingLabelInput
                    label='Cuéntanos aquí'
                    multiline={ true }
                    containerStyles={ stylesMissionOne.textInput }
                    labelStyles={{ paddingHorizontal: 16  }}
                    inputStyles={ stylesMissionOne.inputStyles }
                    onChangeText={ value => validateText(value) }
                    value={ text }
                    autoCorrect={ false }
                    cursorColor='black'
                    textAlign='left'
                    textAlignVertical='top'
                    verticalAlign='top'
                />
                <Text style={{ color: '#67778F', fontFamily: 'WhitneyHTF-Meduim', fontSize: 12, marginTop: 4, textAlign: 'right' }}>
                    Min. 100 caracteres
                </Text>
            </View>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={[
                    stylesMissionOne.button,
                    error ? stylesMissionOne.buttonDisabled : null
                ]}
                disabled={ error }
                onPress={ finishMission }
            >
                <Text style={[
                    stylesMissionOne.buttonText,
                    error ? stylesMissionOne.buttonTextDisabled : null
                ]}>Finalizar misión</Text>
            </TouchableOpacity>
        </>
    )
}

const stylesMissionOne = StyleSheet.create({
    question: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Bold',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 20,
    },
    response: {
        marginTop: 16,
    },
    button: {
        backgroundColor: '#E50A17',
        paddingVertical: 18,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 14,
        marginTop: 24,
    },
    buttonDisabled: {
        backgroundColor: '#E6EDF3',
    },
    buttonText: {
        color: 'white',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 16,
    },
    buttonTextDisabled: {
        color: '#A3B4CC',
    },
    textError: {
        color: '#FF2F48',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 12,
        marginLeft: 2,
        marginTop: 8
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#42526A',
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontWeight: 500,
        height: 128,
    },
    inputStyles: {
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        marginTop: 10,
        paddingHorizontal: 16,
    },
})
