import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import BouncyCheckboxGroup, { ICheckboxButton } from 'react-native-bouncy-checkbox-group'

interface Props {
    setQualify: React.Dispatch<React.SetStateAction<boolean>>
    setShowQuestion: React.Dispatch<React.SetStateAction<boolean>>
}

export const MissionThreeLevelFive = ({ setQualify, setShowQuestion }: Props) => {

    const _iconStyle = (color = 'black') => ({
        height: 20,
        width: 20,
        borderRadius: 4,
        borderColor: color,
        borderWidth: 1,
    })
    
    const styles = {
        container: { marginTop: 10 },
        verticalStyle: { marginTop: 0 },
        textStyle: { color: '#42526A' },
        iconImageStyle: { height: 10, width: 10 },
    }

    const [alternatives, setAlternatives] = useState<ICheckboxButton[]>([
        {
            id: '0',
            text: 'Se pueden reservar computadoras hasta por 2 horas diarias 🕐',
            textStyle: [styles.textStyle, { textDecorationLine: 'none', fontFamily: 'WhitneyHTF-Medium', fontSize: 14 }],
            style: [styles.verticalStyle, { backgroundColor: 'white', padding: 8, marginRight: 15, borderRadius: 8 }],
            iconStyle: _iconStyle(''),
            iconImageStyle: styles.iconImageStyle,
            fillColor: '#E50A17',
            unfillColor: 'white',
            innerIconStyle: { borderWidth: 0 },
        },
        {
            id: '1',
            text: 'Para hacer uso de la computadora, la reserva debe activarse ☑️',
            textStyle: [styles.textStyle, { textDecorationLine: 'none', fontFamily: 'WhitneyHTF-Medium', fontSize: 14 }],
            style: [styles.verticalStyle, { backgroundColor: 'white', padding: 8, marginRight: 15, borderRadius: 8 }],
            iconStyle: _iconStyle(),
            iconImageStyle: styles.iconImageStyle,
            fillColor: '#E50A17',
            unfillColor: 'white',
            innerIconStyle: { borderWidth: 0 },
        },
        {
            id: '2',
            text: 'Las computadoras pueden ser para uso grupal 🖥️',
            textStyle: [styles.textStyle, { textDecorationLine: 'none', fontFamily: 'WhitneyHTF-Medium', fontSize: 14 }],
            style: [styles.verticalStyle, { backgroundColor: 'white', padding: 8, marginRight: 15, borderRadius: 8 }],
            iconStyle: _iconStyle(),
            iconImageStyle: styles.iconImageStyle,
            fillColor: '#E50A17',
            unfillColor: 'white',
            innerIconStyle: { borderWidth: 0 },
        },
    ])
    const [correct, setCorrect] = useState(false)

    const handleChangeCheck = (id: string) => {
        let alternative = alternatives.map(alt => {
            if (alt.id === id) {
                alt.iconStyle = _iconStyle('#E50A17')
            } else {
                alt.iconStyle = _iconStyle('black')
            }
            return alt
        })

        setAlternatives([
            ...alternative!
        ])

        alternative = alternatives.map(alt => {
            if (alt.id === id && id !== '2') {
                alt.style = [styles.verticalStyle, { backgroundColor: '#F3F6F9', padding: 8, borderRadius: 8 }]
                alt.fillColor = 'white'
                alt.textComponent = (
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#42526A', marginLeft: 16, marginRight: 75, fontFamily: 'WhitneyHTF-Medium', fontSize: 14 }}>{ alt.text }</Text>
                        <Text style={{ position: 'absolute', right: 0, color: 'black', fontFamily: 'WhitneyHTF-Bold', fontSize: 12 }}>¡Ups!</Text>
                    </View>
                )
                setCorrect(false)
            } else if (alt.id === id && id === '2') {
                alt.style = [styles.verticalStyle, { backgroundColor: '#F3F6F9', padding: 8, borderRadius: 8 }]
                alt.textComponent = (
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#42526A', marginLeft: 16, marginRight: 75, fontFamily: 'WhitneyHTF-Medium', fontSize: 14 }}>{ alt.text }</Text>
                        <Text style={{ position: 'absolute', right: 0, color: 'black', fontFamily: 'WhitneyHTF-Bold', fontSize: 12 }}>¡Correcto!</Text>
                    </View>
                )
                setCorrect(true)
            } else {
                alt.style = [styles.verticalStyle, { backgroundColor: 'white', padding: 8, borderRadius: 8, marginRight: 15 }]
                alt.textComponent = null
            }
            return alt
        })

        setAlternatives([
            ...alternative!
        ])
    }

    const finishMission = () => {
        setQualify(true)
        setShowQuestion(false)
    }

    return (
        <>
            <Text style={ stylesMissionOne.question }>
                ¿Cuál de las afirmaciones sobre la reserva de computadoras es FALSA?
            </Text>
            <View style={ stylesMissionOne.response }>
                <BouncyCheckboxGroup
                    data={ alternatives }
                    onChange={(selectedItem: ICheckboxButton) => {
                        handleChangeCheck(selectedItem.id.toString())
                    }}
                    style={{ flexDirection: 'column' }}
                />
            </View>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={[
                    stylesMissionOne.button,
                    !correct ? stylesMissionOne.buttonDisabled : null
                ]}
                disabled={ !correct }
                onPress={ finishMission }
            >
                <Text style={[
                    stylesMissionOne.buttonText,
                    !correct ? stylesMissionOne.buttonTextDisabled : null
                ]}>Finalizar misión</Text>
            </TouchableOpacity>
        </>
    )
}

const stylesMissionOne = StyleSheet.create({
    question: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Bold',
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
    checkboxIcon: {
        borderRadius: 4,
        borderWidth: 1,
        marginRight: -5,
    },
    checkboxText: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 14,
        textDecorationLine: 'none',
    },
})
