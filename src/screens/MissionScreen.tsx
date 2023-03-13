import React, { useRef, useState } from 'react'
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { Header } from '../components/Header'
import { RootStackParams } from '../navigator/Navigator'

import { stylesMission } from '../styles/mission'
import { BottomSheet } from '../components/BottomSheet'
import { stylesBottomSheet } from '../styles/bottomSheet'
import { QualifyMission } from '../components/QualifyMission'

interface Props extends StackScreenProps<RootStackParams, 'MissionScreen'>{}

export const MissionScreen = ({ navigation }: Props) => {

    const [activeBottomSheet, setActiveBottomSheet] = useState(false)
    const [qualify, setQualify] = useState(false)
    const [textOne, setTextOne] = useState('')
    const [textTwo, setTextTwo] = useState('')
    const [textThree, setTextThree] = useState('')
    const [textFour, setTextFour] = useState('')
    const secondNumberRef: any = useRef()
    const thirdNumberRef: any = useRef()
    const fourthNumberRef: any = useRef()

    const slide = () => {
        setActiveBottomSheet(!activeBottomSheet)
    }

    const finishMission = () => {
        
    }

    return (
        <>
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
                            activeOpacity={ 1 }
                            style={ stylesMission.buttonCode }
                            onPress={ slide }
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
                        <TouchableOpacity
                            activeOpacity={ 1 }
                            style={ stylesMission.buttonCompleteMission }
                        >
                            <Text style={ stylesMission.buttonCompleteText }>Ir a completar misión</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <BottomSheet activeBottomSheet={ activeBottomSheet }>
                    <>
                        <View style={ stylesBottomSheet.header }>
                            <Text style={ stylesBottomSheet.headerTitle }>COMPLETAR MISIÓN</Text>
                            <Image
                                source={ require('../assets/ic-sm-error.png') }
                                style={{ width: 24, height: 24 }}
                            />
                        </View>
                        <View style={ stylesBottomSheet.body }>
                            {
                                qualify ? (
                                    <>
                                        <Text style={ stylesBottomSheet.question }>
                                            Completa esta misión ingresando el código de verificación que te dió
                                            <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> Alma WhatsApp</Text>.
                                        </Text>
                                        <View style={ stylesBottomSheet.response }>
                                            <View style={ stylesBottomSheet.boxNumberContainer }>
                                                <View style={ stylesBottomSheet.boxNumber }>
                                                    <TextInput
                                                        keyboardType='number-pad'
                                                        selectionColor='black'
                                                        returnKeyType='next'
                                                        maxLength={ 1 }
                                                        onChange={ () => secondNumberRef.current.focus() }
                                                        onChangeText={ (value) => setTextOne(value) }
                                                        blurOnSubmit={ false }
                                                        style={ stylesBottomSheet.textBoxNumber }
                                                    />
                                                </View>
                                                <View style={ stylesBottomSheet.boxNumber }>
                                                    <TextInput
                                                        keyboardType='number-pad'
                                                        returnKeyType='next'
                                                        selectionColor='black'
                                                        maxLength={ 1 }
                                                        ref={ secondNumberRef }
                                                        onChange={ () => thirdNumberRef.current.focus() }
                                                        onChangeText={ (value) => setTextTwo(value) }
                                                        blurOnSubmit={ false }
                                                        style={ stylesBottomSheet.textBoxNumber }
                                                    />
                                                </View>
                                                <View style={ stylesBottomSheet.boxNumber }>
                                                    <TextInput
                                                        keyboardType='number-pad'
                                                        returnKeyType='next'
                                                        selectionColor='black'
                                                        maxLength={ 1 }
                                                        ref={ thirdNumberRef }
                                                        onChange={ () => fourthNumberRef.current.focus() }
                                                        onChangeText={ (value) => setTextThree(value) }
                                                        blurOnSubmit={ false }
                                                        style={ stylesBottomSheet.textBoxNumber }
                                                    />
                                                </View>
                                                <View style={ stylesBottomSheet.boxNumber }>
                                                    <TextInput
                                                        keyboardType='number-pad'
                                                        returnKeyType='next'
                                                        selectionColor='black'
                                                        maxLength={ 1 }
                                                        ref={ fourthNumberRef }
                                                        onChangeText={ (value) => setTextFour(value) }
                                                        blurOnSubmit={ false }
                                                        style={ stylesBottomSheet.textBoxNumber }
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                        <TouchableOpacity
                                            activeOpacity={ 1 }
                                            style={[
                                                stylesBottomSheet.button,
                                                textOne === '' || textTwo === '' || textThree === '' || textFour === '' ? stylesBottomSheet.buttonDisabled : null
                                            ]}
                                            disabled={ textOne === '' || textTwo === '' || textThree === '' || textFour === '' }
                                            onPress={ finishMission }
                                        >
                                            <Text style={[
                                                stylesBottomSheet.buttonText,
                                                textOne === '' || textTwo === '' || textThree === '' || textFour === '' ? stylesBottomSheet.buttonTextDisabled : null
                                            ]}>Finalizar misión</Text>
                                        </TouchableOpacity>
                                    </>
                                ) : (
                                    <QualifyMission />
                                )
                            }
                        </View>
                    </>
                </BottomSheet>
                {
                    activeBottomSheet && (
                        <View style={ stylesMission.missionContainerLocked }></View>
                    )
                }
            </SafeAreaView>
        </>
    )
}
