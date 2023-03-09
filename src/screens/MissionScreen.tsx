import React from 'react'
import { SafeAreaView, ScrollView, Text, Touchable, View, TouchableOpacity, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'

import { Header } from '../components/Header'
import { RootStackParams } from '../navigator/Navigator'

import { stylesMission } from '../styles/mission'

interface Props extends StackScreenProps<RootStackParams, 'MissionScreen'>{}

export const MissionScreen = () => {
    return (
        <SafeAreaView style={ stylesMission.missionContainer }>
            <ScrollView>
                <Header title='CONÉCTATE CON LA UNIVERSIDAD'/>
                <View style={ stylesMission.textHeaderWrapper }>
                    <Text style={ stylesMission.textHeader }>
                        Conoce los canales digitales primordiales para comenzar tus clases sin inconvenientes.
                    </Text>
                </View>
                <View style={ stylesMission.missionsBody }>
                    <View style={[
                        stylesMission.missionTag,
                        stylesMission.missionTagPending
                    ]}>
                        <View style={ stylesMission.missionCirclePending }></View>
                        <Text style={ stylesMission.missionTagText }>EN PROGRESO</Text>
                    </View>
                    <Text style={ stylesMission.missionTitle }>¿CÓMO COMPLETO LA MISIÓN?</Text>
                    <View style={ stylesMission.missionDescriptionWrapper }>
                        <Text style={ stylesMission.missionBeginDescription }>
                            Para terminar esta misión debes conocer lo siguiente:
                        </Text>
                        <View style={ stylesMission.missionDescription }>
                            <View style={ stylesMission.missionPointsWrapper }>
                                <Text style={ stylesMission.missionPoints }>1.</Text>
                                <Text style={ stylesMission.missionPoints }>
                                    Ingresa a tu
                                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> Correo UPC</Text>
                                    y mantente siempre informado
                                </Text>
                            </View>
                            <View style={ stylesMission.missionPointsWrapper }>
                                <Text style={ stylesMission.missionPoints }>2.</Text>
                                <Text style={ stylesMission.missionPoints }>
                                    Guarda el contacto de <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}>Alma WhatsApp</Text> y resuelve las dudas que tengas
                                </Text>
                            </View>
                            <View style={ stylesMission.missionPointsWrapper }>
                                <Text style={ stylesMission.missionPoints }>3.</Text>
                                <Text style={ stylesMission.missionPoints }>
                                    Por último, pídele a <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}>Alma WhatsApp</Text> tu código de verificación para
                                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> completar la misión</Text>
                                </Text>
                            </View>
                        </View>
                        <Text style={ stylesMission.missionRemember }>Recuerda que a través de estos canales podrás estar al tanto de toda la información que tenemos para ti.</Text>
                    </View>
                    <TouchableOpacity
                        style={ stylesMission.buttonCode }
                    >
                        <Text style={ stylesMission.buttonCodeText }>Pedir código por Alma WhatsApp</Text>
                    </TouchableOpacity>
                    <View style={ stylesMission.cardDisclaimer }>
                        <Image
                            source={ require('../assets/wand.png') }
                            style={{ width: 32, height: 32 }}
                        />
                        <View>
                            <Text style={ stylesMission.disclaimerTitle }>¿ALGUNA DUDA ADICIONAL?</Text>
                            <Text style={ stylesMission.disclaimerDescription }>
                                Resuélvelas a través de
                                <Text
                                    style={{ fontFamily: 'WhitneyHTF-Bold', color: '#3817FF', textDecorationColor: '#3817FF', textDecorationLine: 'underline' }}
                                > Explora UPC.</Text>
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={ stylesMission.buttonCompleteMission }>
                        <Text style={ stylesMission.buttonCompleteText }>Ir a completar misión</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
