import React, { useRef, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

interface Props {
    setQualify: React.Dispatch<React.SetStateAction<boolean>>
    setShowQuestion: React.Dispatch<React.SetStateAction<boolean>>
}

export const MissionOneLevelOne = ({ setQualify, setShowQuestion }: Props) => {

    const [textOne, setTextOne] = useState('')
    const [textTwo, setTextTwo] = useState('')
    const [textThree, setTextThree] = useState('')
    const [textFour, setTextFour] = useState('')
    const [errorCode, setErrorCode] = useState(false)
    const secondNumberRef: any = useRef()
    const thirdNumberRef: any = useRef()
    const fourthNumberRef: any = useRef()

    const validateCode = () => {
        const code = `${ textOne }${ textTwo }${ textThree }${ textFour }`
        if (code === '7741' || code === '4438' || code === '5721' || code === '1593' || code === '1208') {
            setErrorCode(false)
            setQualify(true)
            setShowQuestion(false)
        } else {
            setErrorCode(true)
        }
    }

    return (
        <>
            <Text style={ stylesMissionOne.question }>
                Completa esta misión ingresando el código de verificación que te dio
                <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> Alma WhatsApp</Text>.
            </Text>
            <View style={ stylesMissionOne.response }>
                <View style={{ width: 230, alignSelf: 'center' }}>
                    <View style={ stylesMissionOne.boxNumberContainer }>
                        <View style={[
                            stylesMissionOne.boxNumber,
                            {
                                borderColor: errorCode ? '#FF2F48' : '#42526A'
                            }
                        ]}>
                            <TextInput
                                keyboardType='number-pad'
                                selectionColor='black'
                                returnKeyType='next'
                                maxLength={ 1 }
                                onChange={ () => secondNumberRef.current.focus() }
                                onChangeText={ (value) => setTextOne(value) }
                                blurOnSubmit={ false }
                                style={ stylesMissionOne.textBoxNumber }
                            />
                        </View>
                        <View style={[
                            stylesMissionOne.boxNumber,
                            {
                                borderColor: errorCode ? '#FF2F48' : '#42526A'
                            }
                        ]}>
                            <TextInput
                                keyboardType='number-pad'
                                returnKeyType='next'
                                selectionColor='black'
                                maxLength={ 1 }
                                ref={ secondNumberRef }
                                onChange={ () => thirdNumberRef.current.focus() }
                                onChangeText={ (value) => setTextTwo(value) }
                                blurOnSubmit={ false }
                                style={ stylesMissionOne.textBoxNumber }
                            />
                        </View>
                        <View style={[
                            stylesMissionOne.boxNumber,
                            {
                                borderColor: errorCode ? '#FF2F48' : '#42526A'
                            }
                        ]}>
                            <TextInput
                                keyboardType='number-pad'
                                returnKeyType='next'
                                selectionColor='black'
                                maxLength={ 1 }
                                ref={ thirdNumberRef }
                                onChange={ () => fourthNumberRef.current.focus() }
                                onChangeText={ (value) => setTextThree(value) }
                                blurOnSubmit={ false }
                                style={ stylesMissionOne.textBoxNumber }
                            />
                        </View>
                        <View style={[
                            stylesMissionOne.boxNumber,
                            {
                                borderColor: errorCode ? '#FF2F48' : '#42526A'
                            }
                        ]}>
                            <TextInput
                                keyboardType='number-pad'
                                returnKeyType='next'
                                selectionColor='black'
                                maxLength={ 1 }
                                ref={ fourthNumberRef }
                                onChangeText={ (value) => setTextFour(value) }
                                blurOnSubmit={ false }
                                style={ stylesMissionOne.textBoxNumber }
                            />
                        </View>
                    </View>
                    <Text style={ stylesMissionOne.textError }>
                        {
                            errorCode ? 'Código incorrecto' : ''
                        }
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={[
                    stylesMissionOne.button,
                    textOne === '' || textTwo === '' || textThree === '' || textFour === '' ? stylesMissionOne.buttonDisabled : null
                ]}
                disabled={ textOne === '' || textTwo === '' || textThree === '' || textFour === '' }
                onPress={ validateCode }
            >
                <Text style={[
                    stylesMissionOne.buttonText,
                    textOne === '' || textTwo === '' || textThree === '' || textFour === '' ? stylesMissionOne.buttonTextDisabled : null
                ]}>Finalizar misión</Text>
            </TouchableOpacity>
        </>
    )
}

const stylesMissionOne = StyleSheet.create({
    question: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 14,
        lineHeight: 20,
    },
    response: {
        marginTop: 40,
    },
    boxNumberContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        gap: 12,
        width: 230,
    },
    boxNumber: {
        borderWidth: 1,
        borderColor: '#42526A',
        borderRadius: 8,
        width: 48,
        height: 56,
    },
    textBoxNumber: {
        color: 'black',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#E50A17',
        paddingVertical: 18,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 14,
        bottom: -10,
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
})
