import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { launchImageLibrary } from 'react-native-image-picker'

interface Props {
    setQualify: React.Dispatch<React.SetStateAction<boolean>>
    setShowQuestion: React.Dispatch<React.SetStateAction<boolean>>
}

interface ImageGallery { 
    uri: string
    filename: string
}

export const MissionOneLevelSix = ({ setQualify, setShowQuestion }: Props) => {

    const [tempUri, setTempUri] = useState<ImageGallery>()

    const handleOpenGallery = () => {
        launchImageLibrary({
            mediaType: 'photo',
            quality: 0.7
        }, (resp) => {
            if (resp.didCancel) return
            if (!resp.assets?.[0].uri) return

            const filenameArray = (resp.assets?.[0].fileName!).split('_')
            const filename = filenameArray[5]

            setTempUri({
                uri: resp.assets?.[0].uri,
                filename
            })
        })
    }

    const handleFinish = () => {
        setQualify(true)
        setShowQuestion(false)
    }

    return (
        <>
            <Text style={ stylesMissionTwo.question }>
                Completa esta misión subiendo una foto de tu compromiso.
            </Text>

            {
                !tempUri && (
                    <TouchableOpacity
                        activeOpacity={ 1 }
                        onPress={ handleOpenGallery }
                        style={ stylesMissionTwo.galleryButton }
                    >
                        <Image
                            source={ require('../../../../assets/add.png') }
                            style={{ width: 32, height: 32 }}
                        />
                        <Text style={ stylesMissionTwo.galleryButtonText }>Agregar imagen</Text>
                    </TouchableOpacity>
                )
            }

            {
                tempUri && (
                    <View style={ stylesMissionTwo.imageContainer }>
                        {
                            tempUri && (
                                <Image
                                    source={{ uri: tempUri.uri }}
                                    style={{ width: 40, height: 40, marginLeft: 16 }}
                                />
                            )
                        }
                        <View>
                            {/* <Text style={ stylesMissionTwo.filename }>{ tempUri.filename }</Text> */}
                            <Text style={ stylesMissionTwo.completedLoad }>Carga completa</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={ 1 }
                            onPress={ () => setTempUri(undefined) }
                            style={{
                                marginRight: 24,
                                position: 'absolute',
                                right: -10,
                            }}
                        >
                            <Image
                                source={ require('../../../../assets/ic-md-delete.png') }
                                style={{
                                    width: 16,
                                    height: 16,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }

            <TouchableOpacity
                activeOpacity={ 1 }
                style={[
                    stylesMissionTwo.button,
                    !tempUri ? stylesMissionTwo.buttonDisabled : null
                ]}
                disabled={ !tempUri }
                onPress={ handleFinish }
            >
                <Text style={[
                    stylesMissionTwo.buttonText,
                    !tempUri ? stylesMissionTwo.buttonTextDisabled : null
                ]}>Finalizar misión</Text>
            </TouchableOpacity>
        </>
    )
}

const stylesMissionTwo = StyleSheet.create({
    question: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 14,
        lineHeight: 20,
    },
    response: {
        marginTop: 40,
    },
    galleryButton: {
        flexDirection: 'row',
        gap: 8,
        borderWidth: 1,
        borderColor: '#E50A17',
        borderRadius: 12,
        borderStyle: 'dotted',
        width: 264,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 32,
    },
    galleryButtonText: {
        color: '#E50A17',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 16,
        lineHeight: 24,
    },
    imageContainer: {
        position: 'relative',
        flexDirection: 'row',
        gap: 8,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#F8FAFD',
        borderWidth: 1,
        borderColor: '#A3B4CC',
        borderRadius: 12,
        marginTop: 32,
        width: 264,
        height: 64,
    },
    filename: {
        color: 'black',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 12,
        lineHeight: 16,
    },
    completedLoad: {
        color: 'black',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 10,
        lineHeight: 16,
    },
    button: {
        backgroundColor: '#E50A17',
        paddingVertical: 18,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 14,
        marginTop: 30,
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
})
