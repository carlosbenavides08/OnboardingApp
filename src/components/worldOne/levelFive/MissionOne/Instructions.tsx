import React, { useState } from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    slide: () => void
    setQualify: React.Dispatch<React.SetStateAction<boolean>>
}

export const InstructionsLevel5Mission1 = ({ slide, setQualify }: Props) => {

    const [primaryButton, setPrimaryButton] = useState(false)

    const handleCompleteMission = () => {
        slide()
        setQualify(true)
    }

    return (
        <>
            <View style={[
                stylesInstructions.missionTag,
                stylesInstructions.missionTagPending
            ]}>
                <View style={ stylesInstructions.missionCirclePending }></View>
                <Text style={ stylesInstructions.missionTagTextPending }>EN PROGRESO</Text>
            </View>
            <Text style={ stylesInstructions.missionTitle }>¿CÓMO COMPLETO LA MISIÓN?</Text>
            <View style={ stylesInstructions.missionDescriptionWrapper }>
                <Text style={ stylesInstructions.missionBeginDescription }>
                    Para terminar esta misión debes realizar lo siguiente:
                </Text>
                <View style={ stylesInstructions.missionDescription }>
                    <View style={ stylesInstructions.missionPointsWrapper }>
                        <Text style={ stylesInstructions.missionPoints }>1.</Text>
                        <Text style={ stylesInstructions.missionPoints }>
                            Ingresa a la
                            <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> Biblioteca UPC</Text>
                        </Text>
                    </View>
                    <View style={ stylesInstructions.missionPointsWrapper }>
                        <Text style={ stylesInstructions.missionPoints }>2.</Text>
                        <Text style={ stylesInstructions.missionPoints }>
                            Realiza una
                            <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> búsqueda </Text>
                            del tema o libro que necesites y selecciona una de las opciones
                        </Text>
                    </View>
                    <View style={ stylesInstructions.missionPointsWrapper }>
                        <Text style={ stylesInstructions.missionPoints }>3.</Text>
                        <Text style={ stylesInstructions.missionPoints }>
                            Si el material está
                            <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> en línea</Text>
                            , haz clic en el enlace e ingresa con tu usuario UPC
                        </Text>
                    </View>
                    <View style={ stylesInstructions.missionPointsWrapper }>
                        <Text style={ stylesInstructions.missionPoints }>4.</Text>
                        <Text style={ stylesInstructions.missionPoints }>
                            Si el material está en una
                            <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> biblioteca de campus</Text>
                            , dirígete presencialmente donde se encuentre y solicita el préstamo
                        </Text>
                    </View>
                </View>
                <Text style={ stylesInstructions.missionRemember }>
                    También puedes encontrar otro tipo de materiales académicos en la pestaña de
                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> Recursos</Text>
                    . Revisa las opciones y el contenido de cada una.
                </Text>
            </View>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={ stylesInstructions.buttonCode }
                onPress={ () => {
                    Linking.openURL('https://biblioteca.upc.edu.pe/portal/presentacion')
                    setPrimaryButton(true)
                }}
            >
                <Text style={ stylesInstructions.buttonCodeText }>Ir a Biblioteca UPC</Text>
            </TouchableOpacity>
            <View style={ stylesInstructions.cardDisclaimer }>
                <Image
                    source={ require('../../../../assets/wand.png') }
                    style={{ width: 32, height: 32 }}
                />
                <View>
                    <Text style={ stylesInstructions.disclaimerTitle }>¿ALGUNA DUDA ADICIONAL?</Text>
                    <Text style={ stylesInstructions.disclaimerDescription }>
                        Resuélvelas a través de{ ' ' }
                        <Text
                            style={{ fontFamily: 'WhitneyHTF-Bold', color: '#3817FF', textDecorationColor: '#3817FF', textDecorationLine: 'underline' }}
                        >Contacto Web.</Text>
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={[
                    stylesInstructions.buttonCompleteMission,
                    !primaryButton ? stylesInstructions.buttonCompleteMissionDisabled : null
                ]}
                onPress={ handleCompleteMission }
                disabled={ !primaryButton }
            >
                <Text style={[
                    stylesInstructions.buttonCompleteText,
                    !primaryButton ? stylesInstructions.buttonTextDisabled : null
                ]}>Ir a completar misión</Text>
            </TouchableOpacity>
        </>
    )
}

const stylesInstructions = StyleSheet.create({
    missionTag: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        borderRadius: 4,
        paddingHorizontal: 8,
    },
    missionTagPending: {
        backgroundColor: '#FFE7C3',
        width: 95,
    },
    missionCirclePending: {
        backgroundColor: '#FF6D00',
        width: 6,
        height: 6,
        borderRadius: 10,
    },
    missionTagTextPending: {
        color: '#6D2F00',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 10,
        lineHeight: 16,
    },
    missionTitle: {
        color: '#E50A17',
        fontFamily: 'SolanoGothicMVB-Bd',
        fontSize: 28,
        lineHeight: 36,
        marginTop: 16,
    },
    missionBeginDescription: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        lineHeight: 20,
        marginBottom: 12,
    },
    missionDescriptionWrapper: {
        marginTop: 8
    },
    missionDescription: {
        gap: 4,
    },
    missionPointsWrapper: {
        flexDirection: 'row',
        gap: 4,
        paddingLeft: 8,
        paddingRight: 13,
    },
    missionPoints: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        lineHeight: 20,
    },
    missionRemember: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        marginTop: 16,
        lineHeight: 20,
    },
    buttonCode: {
        borderWidth: 2,
        borderColor: '#E50A17',
        borderRadius: 14,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },
    buttonCodeText: {
        color: '#E50A17',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 16,
        lineHeight: 24,
    },
    viewRulesContainer: {
        gap: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },
    viewRulesText: {
        color: '#3817FF',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 14,
        lineHeight: 16,
    },
    cardDisclaimer: {
        gap: 8,
        flexDirection: 'row',
        backgroundColor: '#F3F6F9',
        borderRadius: 6,
        height: 80,
        marginTop: 32,
        paddingHorizontal: 12,
        alignItems: 'center',
    },
    disclaimerTitle: {
        color: 'black',
        fontFamily: 'SolanoGothicMVB-Bd',
        fontSize: 16,
        lineHeight: 24,
    },
    disclaimerDescription: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
    },
    buttonCompleteMission: {
        backgroundColor: '#E50A17',
        height: 48,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 48,
        marginBottom: 30,
    },
    buttonCompleteMissionDisabled: {
        backgroundColor: '#E6EDF3',
    },
    buttonCompleteText: {
        color: 'white',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 16,
    },
    buttonTextDisabled: {
        color: '#A3B4CC',
    },
})
