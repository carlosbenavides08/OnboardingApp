import React, { useState } from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    slide: () => void
}

export const InstructionsLevel6Mission1 = ({ slide }: Props) => {

    const [primaryButton, setPrimaryButton] = useState(false)

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
                            Revisa la guía informativa sobre
                            <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> Tips para un estudio eficaz </Text>
                            y conoce buenas prácticas de estudio para tus parciales
                        </Text>
                    </View>
                    <View style={ stylesInstructions.missionPointsWrapper }>
                        <Text style={ stylesInstructions.missionPoints }>2.</Text>
                        <Text style={ stylesInstructions.missionPoints }>
                            En la misma guía informativa, desarrolla el test para
                            <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> conocer tus hábitos de estudio </Text>
                            (Pág. 9 y 10)
                        </Text>
                    </View>
                    <View style={ stylesInstructions.missionPointsWrapper }>
                        <Text style={ stylesInstructions.missionPoints }>3.</Text>
                        <Text style={ stylesInstructions.missionPoints }>
                            Según el resultado que obtengas en el test, escribe un
                            <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> compromiso </Text>
                            para mejorar tus hábitos de estudio
                        </Text>
                    </View>
                    <View style={ stylesInstructions.missionPointsWrapper }>
                        <Text style={ stylesInstructions.missionPoints }>4.</Text>
                        <Text style={ stylesInstructions.missionPoints }>
                            Finalmente, sube una foto de tu compromiso al
                            <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> ir completar la misión</Text>
                        </Text>
                    </View>
                </View>
                <Text style={ stylesInstructions.missionRemember }>
                    Te recomendamos apuntar aquellos tips que crees que te puedan servir más para tener un buen hábito de estudio durante tu vida universitaria.
                </Text>
            </View>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={ stylesInstructions.buttonCode }
                onPress={ () => {
                    Linking.openURL('https://www.upc.edu.pe/servicios/orientacion-psicopedagogica/documentos/tips-para-un-estudio-eficaz.pdf')
                    setPrimaryButton(true)
                }}
            >
                <Text style={ stylesInstructions.buttonCodeText }>Ir a Tips para un estudio eficaz</Text>
            </TouchableOpacity>
            <View style={ stylesInstructions.cardDisclaimer }>
                <Image
                    source={ require('../../../../assets/wand.png') }
                    style={{ width: 32, height: 32 }}
                />
                <View>
                    <Text style={ stylesInstructions.disclaimerTitle }>¿ALGUNA DUDA ADICIONAL?</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={ stylesInstructions.disclaimerDescription }>
                            Resuélvelas a través de{ ' ' }
                        </Text>
                        <TouchableOpacity
                            style={{ margin: 0, padding: 0 }}
                            activeOpacity={ 1 }
                            onPress={ () => {
                                Linking.openURL('https://contactoweb.upc.edu.pe')
                            }}
                        >
                            <Text
                                style={{ fontFamily: 'WhitneyHTF-Bold', color: '#3817FF', textDecorationColor: '#3817FF', textDecorationLine: 'underline' }}
                            >Contacto Web.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={[
                    stylesInstructions.buttonCompleteMission,
                    // !primaryButton ? stylesInstructions.buttonCompleteMissionDisabled : null
                ]}
                onPress={ slide }
                // disabled={ !primaryButton }
            >
                <Text style={[
                    stylesInstructions.buttonCompleteText,
                    // !primaryButton ? stylesInstructions.buttonTextDisabled : null
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
        lineHeight: 20,
    },
    buttonCompleteMission: {
        backgroundColor: '#E50A17',
        height: 48,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
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
