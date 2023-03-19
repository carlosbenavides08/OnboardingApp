import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import BouncyCheckboxGroup, { ICheckboxButton } from 'react-native-bouncy-checkbox-group'

interface Props {
    setQualify: React.Dispatch<React.SetStateAction<boolean>>
    setShowQuestion: React.Dispatch<React.SetStateAction<boolean>>
}

export const MissionTwoLevelTwo = ({ setQualify, setShowQuestion }: Props) => {

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
            text: '18',
            textStyle: [styles.textStyle, { textDecorationLine: 'none', fontFamily: 'WhitneyHTF-Medium', fontSize: 14 }],
            style: [styles.verticalStyle, { backgroundColor: 'white', padding: 8, borderRadius: 8 }],
            iconStyle: _iconStyle(''),
            iconImageStyle: styles.iconImageStyle,
            fillColor: '#E50A17',
            unfillColor: 'white',
            innerIconStyle: { borderWidth: 0 },
        },
        {
            id: '1',
            text: '19',
            textStyle: [styles.textStyle, { textDecorationLine: 'none', fontFamily: 'WhitneyHTF-Medium', fontSize: 14 }],
            style: [styles.verticalStyle, { backgroundColor: 'white', padding: 8, borderRadius: 8 }],
            iconStyle: _iconStyle(),
            iconImageStyle: styles.iconImageStyle,
            fillColor: '#E50A17',
            unfillColor: 'white',
            innerIconStyle: { borderWidth: 0 },
        },
        {
            id: '2',
            text: '20',
            textStyle: [styles.textStyle, { textDecorationLine: 'none', fontFamily: 'WhitneyHTF-Medium', fontSize: 14 }],
            style: [styles.verticalStyle, { backgroundColor: 'white', padding: 8, borderRadius: 8 }],
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
            if (alt.id === id && id !== '1') {
                alt.style = [styles.verticalStyle, { backgroundColor: '#F3F6F9', padding: 8, borderRadius: 8 }]
                alt.fillColor = 'white'
                alt.textComponent = (
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#42526A', marginLeft: 16, fontFamily: 'WhitneyHTF-Medium', fontSize: 14 }}>{ alt.text }</Text>
                        <Text style={{ position: 'absolute', right: 0, color: 'black', fontFamily: 'WhitneyHTF-Bold', fontSize: 12 }}>¡Ups!</Text>
                    </View>
                )
                setCorrect(false)
            } else if (alt.id === id && id === '1') {
                alt.style = [styles.verticalStyle, { backgroundColor: '#F3F6F9', padding: 8, borderRadius: 8 }]
                alt.textComponent = (
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#42526A', marginLeft: 16, fontFamily: 'WhitneyHTF-Medium', fontSize: 14 }}>{ alt.text }</Text>
                        <Text style={{ position: 'absolute', right: 0, color: 'black', fontFamily: 'WhitneyHTF-Bold', fontSize: 12 }}>¡Correcto!</Text>
                    </View>
                )
                setCorrect(true)
            } else {
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
            <View style={ stylesMissionTwo.formulaTable }>
                <View style={ stylesMissionTwo.formulaTitle }>
                    <Text style={ stylesMissionTwo.formulaTitleText }>FÓRMULA</Text>
                </View>
                <View style={ stylesMissionTwo.formulaRow }>
                    <Text style={ stylesMissionTwo.formulaTextBoldRow }>
                        20%
                        <Text style={ stylesMissionTwo.formulaTextRow }>(TF1) + </Text>20%
                        <Text style={ stylesMissionTwo.formulaTextRow }>(EX1) +</Text>
                    </Text>
                </View>
                <View style={ stylesMissionTwo.formulaRow }>
                    <Text style={ stylesMissionTwo.formulaTextBoldRow }>
                        20%
                        <Text style={ stylesMissionTwo.formulaTextRow }>(EC1) + </Text>10%
                        <Text style={ stylesMissionTwo.formulaTextRow }>(CL1) +</Text>
                    </Text>
                </View>
                <View style={[ stylesMissionTwo.formulaRow, stylesMissionTwo.lastRow]}>
                    <Text style={ stylesMissionTwo.formulaTextBoldRow }>
                        20%
                        <Text style={ stylesMissionTwo.formulaTextRow }>(TF1) + </Text>10%
                        <Text style={ stylesMissionTwo.formulaTextRow }>(EX1)</Text>
                    </Text>
                </View>
            </View>
            <View style={ stylesMissionTwo.legendTable }>
                <View style={ stylesMissionTwo.legendTableHeader }>
                    <View style={ stylesMissionTwo.column1 }>
                        <Text style={ stylesMissionTwo.textHeader }>TIPO</Text>
                    </View>
                    <View style={ stylesMissionTwo.column2 }>
                        <Text style={ stylesMissionTwo.textHeader }>N°</Text>
                    </View>
                    <View style={ stylesMissionTwo.column3 }>
                        <Text style={ stylesMissionTwo.textHeader }>EVALUACIÓN</Text>
                    </View>
                    <View style={ stylesMissionTwo.column4 }>
                        <Text style={ stylesMissionTwo.textHeader }>PESO</Text>
                    </View>
                    <View style={ stylesMissionTwo.column5 }>
                        <Text style={[ stylesMissionTwo.textHeader, { textAlign: 'center' } ]}>NOTA</Text>
                    </View>
                </View>
                <View style={ stylesMissionTwo.legendTableRow }>
                    <View style={ stylesMissionTwo.column1 }>
                        <Text style={ stylesMissionTwo.textRow }>CL</Text>
                    </View>
                    <View style={ stylesMissionTwo.column2 }>
                        <Text style={ stylesMissionTwo.textRowMedium }>1</Text>
                    </View>
                    <View style={ stylesMissionTwo.column3 }>
                        <Text style={ stylesMissionTwo.textRowMedium }>Control de lectura</Text>
                    </View>
                    <View style={ stylesMissionTwo.column4 }>
                        <Text style={ stylesMissionTwo.textRow }>10%</Text>
                    </View>
                    <View style={ stylesMissionTwo.column5 }>
                        <Text style={[ stylesMissionTwo.textRow, { color: 'black', textAlign: 'center' } ]}>17</Text>
                    </View>
                </View>
                <View style={[ stylesMissionTwo.legendTableRow, stylesMissionTwo.legendTableRowWhite ]}>
                    <View style={ stylesMissionTwo.column1 }>
                        <Text style={ stylesMissionTwo.textRow }>DD</Text>
                    </View>
                    <View style={ stylesMissionTwo.column2 }>
                        <Text style={ stylesMissionTwo.textRowMedium }>1</Text>
                    </View>
                    <View style={ stylesMissionTwo.column3 }>
                        <Text style={ stylesMissionTwo.textRowMedium }>Evaluación de desempeño</Text>
                    </View>
                    <View style={ stylesMissionTwo.column4 }>
                        <Text style={ stylesMissionTwo.textRow }>20%</Text>
                    </View>
                    <View style={ stylesMissionTwo.column5 }>
                        <Text style={[ stylesMissionTwo.textRow, { color: 'black', textAlign: 'center' } ]}>14</Text>
                    </View>
                </View>
                <View style={ stylesMissionTwo.legendTableRow }>
                    <View style={ stylesMissionTwo.column1 }>
                        <Text style={ stylesMissionTwo.textRow }>EC</Text>
                    </View>
                    <View style={ stylesMissionTwo.column2 }>
                        <Text style={ stylesMissionTwo.textRowMedium }>1</Text>
                    </View>
                    <View style={ stylesMissionTwo.column3 }>
                        <Text style={ stylesMissionTwo.textRowMedium }>Promedio evaluación continua</Text>
                    </View>
                    <View style={ stylesMissionTwo.column4 }>
                        <Text style={ stylesMissionTwo.textRow }>20%</Text>
                    </View>
                    <View style={ stylesMissionTwo.column5 }>
                        <Text style={[ stylesMissionTwo.textRow, { color: 'black', textAlign: 'center' } ]}>17</Text>
                    </View>
                </View>
                <View style={[ stylesMissionTwo.legendTableRow, stylesMissionTwo.legendTableRowWhite ]}>
                    <View style={ stylesMissionTwo.column1 }>
                        <Text style={ stylesMissionTwo.textRow }>EX</Text>
                    </View>
                    <View style={ stylesMissionTwo.column2 }>
                        <Text style={ stylesMissionTwo.textRowMedium }>1</Text>
                    </View>
                    <View style={ stylesMissionTwo.column3 }>
                        <Text style={ stylesMissionTwo.textRowMedium }>Exposición</Text>
                    </View>
                    <View style={ stylesMissionTwo.column4 }>
                        <Text style={ stylesMissionTwo.textRow }>20%</Text>
                    </View>
                    <View style={ stylesMissionTwo.column5 }>
                        <Text style={[ stylesMissionTwo.textRow, { color: 'black', textAlign: 'center' } ]}>20</Text>
                    </View>
                </View>
                <View style={ stylesMissionTwo.legendTableRow }>
                    <View style={ stylesMissionTwo.column1 }>
                        <Text style={ stylesMissionTwo.textRow }>PA</Text>
                    </View>
                    <View style={ stylesMissionTwo.column2 }>
                        <Text style={ stylesMissionTwo.textRowMedium }>1</Text>
                    </View>
                    <View style={ stylesMissionTwo.column3 }>
                        <Text style={ stylesMissionTwo.textRowMedium }>Participación</Text>
                    </View>
                    <View style={ stylesMissionTwo.column4 }>
                        <Text style={ stylesMissionTwo.textRow }>10%</Text>
                    </View>
                    <View style={ stylesMissionTwo.column5 }>
                        <Text style={[ stylesMissionTwo.textRow, { color: 'black', textAlign: 'center' } ]}>19</Text>
                    </View>
                </View>
                <View style={[ stylesMissionTwo.legendTableRow, stylesMissionTwo.legendTableRowWhite ]}>
                    <View style={ stylesMissionTwo.column1 }>
                        <Text style={ stylesMissionTwo.textRow }>TF</Text>
                    </View>
                    <View style={ stylesMissionTwo.column2 }>
                        <Text style={ stylesMissionTwo.textRowMedium }>1</Text>
                    </View>
                    <View style={ stylesMissionTwo.column3 }>
                        <Text style={ stylesMissionTwo.textRowMedium }>Trabajo Final</Text>
                    </View>
                    <View style={ stylesMissionTwo.column4 }>
                        <Text style={ stylesMissionTwo.textRow }>20%</Text>
                    </View>
                    <View style={ stylesMissionTwo.column5 }>
                        <Text style={[ stylesMissionTwo.textRow, { color: '#E50A17', textAlign: 'center' } ]}>?</Text>
                    </View>
                </View>
                <View style={ stylesMissionTwo.averageRow }>
                    <View style={ stylesMissionTwo.column1Average }>
                        <Text style={[ stylesMissionTwo.textRowMedium, { lineHeight: 24 } ]}>Promedio final</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={ stylesMissionTwo.column4 }>
                            <Text style={[ stylesMissionTwo.textRow, { lineHeight: 24 } ]}>100%</Text>
                        </View>
                        <View style={ stylesMissionTwo.column5 }>
                            <Text style={[ stylesMissionTwo.textRow, { backgroundColor: 'black', color: 'white', textAlign: 'center', height: 24, lineHeight: 24 } ]}>
                                18
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={ stylesMissionTwo.question }>
                ¿Cuánto de nota deberías tener en tu Trabajo Final para obtener un promedio final de 18?
            </Text>
            <View style={ stylesMissionTwo.response }>
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
                    stylesMissionTwo.button,
                    !correct ? stylesMissionTwo.buttonDisabled : null
                ]}
                disabled={ !correct }
                onPress={ finishMission }
            >
                <Text style={[
                    stylesMissionTwo.buttonText,
                    !correct ? stylesMissionTwo.buttonTextDisabled : null
                ]}>Finalizar misión</Text>
            </TouchableOpacity>
        </>
    )
}

const stylesMissionTwo = StyleSheet.create({
    formulaTable: {
        borderWidth: 1,
        borderColor: '#F3F6F9',
        borderRadius: 10,
        marginBottom: 20,
    },
    formulaTitle: {
        backgroundColor: '#F3F6F9',
        alignItems: 'center',
        paddingVertical: 4,
        borderColor: '#F3F6F9',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    formulaTitleText: {
        color: 'black',
        fontFamily: 'SolanoGothicMVB-Bd',
    },
    formulaRow: {
        alignItems: 'center',
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F6F9',
    },
    lastRow: {
        borderBottomWidth: 0,
    },
    formulaTextBoldRow: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Bold',
    },
    formulaTextRow: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
    },
    legendTable: {
        borderTopWidth: 1,
        borderColor: '#F3F6F9',
        marginBottom: 20,
    },
    legendTableHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 4,
    },
    textHeader: {
        color: 'black',
        fontFamily: 'SolanoGothicMVB-Bd'
    },
    column1: {
        width: 40,
    },
    column2: {
        width: 40,
    },
    column3: {
        width: 200,
    },
    column4: {
        width: 50,
    },
    column5: {
        width: 40,
    },
    legendTableRow: {
        flexDirection: 'row',
        backgroundColor: '#F3F6F9',
        justifyContent: 'center',
        paddingVertical: 4,
    },
    legendTableRowWhite: {
        backgroundColor: 'white',
    },
    textRow: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Bold',
    },
    textRowMedium: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
    },
    averageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#F3F6F9',
        // paddingVertical: 4,
    },
    column1Average: {
        width: 100,
    },
    question: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 14,
        lineHeight: 20,
    },
    response: {
        marginTop: 24,
    },
    button: {
        backgroundColor: '#E50A17',
        paddingVertical: 18,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 14,
        marginTop: 30,
        marginBottom: 20,
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
