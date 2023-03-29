import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import BouncyCheckboxGroup, { ICheckboxButton } from 'react-native-bouncy-checkbox-group'

interface Props {
    setQualify: React.Dispatch<React.SetStateAction<boolean>>
    setShowQuestion: React.Dispatch<React.SetStateAction<boolean>>
}

export const MissionTwoLevelFour = ({ setQualify, setShowQuestion }: Props) => {

    const _iconStyle = (color = 'white') => ({
        height: 15,
        width: 15,
        borderRadius: 50,
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
            text: '¡Muy bien! 😃',
            textStyle: [styles.textStyle, { textDecorationLine: 'none', fontFamily: 'WhitneyHTF-Medium', fontSize: 14 }],
            style: [styles.verticalStyle, { backgroundColor: 'white', padding: 8, borderRadius: 8 }],
            iconStyle: _iconStyle(),
            iconImageStyle: styles.iconImageStyle,
            fillColor: 'white',
            unfillColor: 'white',
            innerIconStyle: { borderColor: 'black' },
        },
        {
            id: '1',
            text: 'Con un poco de inquietud 😐',
            textStyle: [styles.textStyle, { textDecorationLine: 'none', fontFamily: 'WhitneyHTF-Medium', fontSize: 14 }],
            style: [styles.verticalStyle, { backgroundColor: 'white', padding: 8, borderRadius: 8 }],
            iconStyle: _iconStyle(),
            iconImageStyle: styles.iconImageStyle,
            fillColor: 'white',
            unfillColor: 'white',
            innerIconStyle: { borderColor: 'black' },
        },
        {
            id: '2',
            text: 'No muy bien 😔',
            textStyle: [styles.textStyle, { textDecorationLine: 'none', fontFamily: 'WhitneyHTF-Medium', fontSize: 14 }],
            style: [styles.verticalStyle, { backgroundColor: 'white', padding: 8, borderRadius: 8 }],
            iconStyle: _iconStyle(),
            iconImageStyle: styles.iconImageStyle,
            fillColor: 'white',
            unfillColor: 'white',
            innerIconStyle: { borderColor: 'black' },
        },
    ])

    const handleChangeCheck = (id: string) => {
        let alternative = alternatives.map(alt => {
            if (alt.id === id) {
                alt.innerIconStyle = { borderColor: '#E50A17', backgroundColor: '#E50A17' }
                alt.style = [styles.verticalStyle, { backgroundColor: '#F3F6F9', padding: 8, borderRadius: 8 }]
                alt.iconComponent = (
                    <View style={{ borderColor: 'white', borderRadius: 50, backgroundColor: 'white', width: 13, height: 13 }}></View>
                )
                alt.textComponent = (
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#42526A', marginLeft: 16, marginRight: 75, fontFamily: 'WhitneyHTF-Medium', fontSize: 14 }}>{ alt.text }</Text>
                    </View>
                )
            } else {
                alt.innerIconStyle = { borderColor: 'black' }
                alt.iconStyle = _iconStyle()
                alt.style = [styles.verticalStyle, { backgroundColor: 'white', padding: 8, borderRadius: 8 }]
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
                ¿Cómo te has sentido anímicamente en las últimas semanas?
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
                style={ stylesMissionOne.button }
                onPress={ finishMission }
            >
                <Text style={ stylesMissionOne.buttonText }>
                    Finalizar misión
                </Text>
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
