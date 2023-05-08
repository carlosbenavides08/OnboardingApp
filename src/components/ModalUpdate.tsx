import React, { useEffect, useState } from 'react'
import { Image, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import mundoApi from '../api/mundoApi'

import { APP_VERSION } from '@env'

export const ModalUpdate = () => {
    const [version, setVersion] = useState(Number(APP_VERSION))
    const [show, setShow] = useState(false)

    useEffect(() => {
        validateVersion()
    }, [])

    const validateVersion = async() => {
        const { data } = await mundoApi.get('/auth/version')

        if (Number(data.version) > version) {
            // setVersion(data.version)
            setShow(true)
        }
    }

    console.log(version)

    return (
        <View
            style={[
                stylesModal.container,
                !show ? stylesModal.hide : null
            ]}
        >
            <View style={ stylesModal.modal }>
                <Text style={ stylesModal.title }>ACTUALIZA TU APLICACIÓN MI MUNDO UPC</Text>
                <Image source={ require('../assets/saly-43.png') } style={{ width: 80, height: 80, marginTop: 8 }} />
                <Text style={ stylesModal.message }>
                    Para ver los nuevos niveles y misiones tienes que actualizar a una nueva versión de tu aplicación.
                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}> ¡Hazlo ahora y sigue adaptándote a la vida universitaria!</Text>
                </Text>
                <TouchableOpacity
                    style={ stylesModal.button }
                    activeOpacity={ 1 }
                    onPress={
                        () => {
                            if (Platform.OS === 'android') {
                                Linking.openURL('https://play.google.com/store/apps/details?id=com.laureate.mimundoupc')
                            } else {
                                Linking.openURL('https://apps.apple.com/app/mi-mundo-upc/id6447158022')
                            }
                        }
                    }
                >
                    <View>
                        <Text style={ stylesModal.buttonText }>
                            Actualizar Mi Mundo UPC
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const stylesModal = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 24,
        paddingVertical: 24,
        paddingHorizontal: 16,
        width: 320,
        alignItems: 'center'
    },
    title: {
        color: 'black',
        fontFamily: 'SolanoGothicMVB-Bd',
        fontSize: 28,
        textAlign: 'center',
        lineHeight: 36,
    },
    message: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 8,
    },
    button: {
        flexDirection: 'row',
        paddingVertical: 18,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
        backgroundColor: '#E50A17',
        marginTop: 24,
        width: 280,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 16,
    },
    hide: {
        display: 'none',
    },
})
