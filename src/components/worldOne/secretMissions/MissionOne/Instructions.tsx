import React from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    slide: () => void
}

export const InstructionsSecretMission1 = ({ slide }: Props) => {
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
                            Dirígete a
                            <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> Inglés en la UPC </Text>
                            y revisa las
                            <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> condiciones generales</Text>
                        </Text>
                    </View>
                    <View style={ stylesInstructions.missionPointsWrapper }>
                        <Text style={ stylesInstructions.missionPoints }>2.</Text>
                        <Text style={ stylesInstructions.missionPoints }>
                            Infórmate con detalle sobre las
                            <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> modalidades </Text>
                            con las que contamos para certificar el inglés
                        </Text>
                    </View>
                    <View style={ stylesInstructions.missionPointsWrapper }>
                        <Text style={ stylesInstructions.missionPoints }>3.</Text>
                        <Text style={ stylesInstructions.missionPoints }>
                            Por último, responde la pregunta al
                            <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> ir a completar misión</Text>
                        </Text>
                    </View>
                </View>
                <Text style={ stylesInstructions.missionRemember }>
                    Recuerda que certificar el idioma inglés es un
                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> requisito de egreso </Text>
                    de la universidad. Para mayor detalle, puedes revisar el punto 3 y 4 del
                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> reglamento de inglés</Text>.
                </Text>
            </View>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={ stylesInstructions.buttonCode }
                onPress={ () => {
                    Linking.openURL('https://www.upc.edu.pe/ingles-en-la-upc/condiciones-generales/')
                }}
            >
                <Text style={ stylesInstructions.buttonCodeText }>Ir a Inglés en la UPC</Text>
            </TouchableOpacity>
            <View style={ stylesInstructions.viewRulesContainer }>
                <TouchableOpacity
                    activeOpacity={ 1 }
                    onPress={ () => {
                        Linking.openURL('https://res.cloudinary.com/upcbinary/image/upload/v1677882614/institucional/pdf/ingles-en-la-upc/sica-reg-_45_reglamento_de_ingles_en_pregrado_y_pregrado_epe_v02_tiehgq.pdf')
                    }}
                >
                    <Text style={ stylesInstructions.viewRulesText }>Ir a Reglamento de Inglés</Text>
                </TouchableOpacity>
                <Image
                    source={ require('../../../../assets/ic-sm-right.png') }
                    style={{ width: 16, height: 16 }}
                />
            </View>
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
                                Linking.openURL('https://explora.upc.edu.pe/')
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
                ]}
                onPress={ slide }
            >
                <Text style={[
                    stylesInstructions.buttonCompleteText,
                ]}>Ir a completar misión</Text>
            </TouchableOpacity>
        </>
    )
}

const stylesInstructions = StyleSheet.create({
    missionContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    missionContainerLocked: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        zIndex: 90,
    },
    textHeaderWrapper: {
        flexDirection: 'row',
        gap: 24,
        backgroundColor: '#D8DEFF',
        paddingBottom: 30,
        paddingHorizontal: 20,
    },
    textHeader: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        lineHeight: 20,
    },
    missionsBody: {
        paddingHorizontal: 20,
        paddingTop: 40,
    },
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
