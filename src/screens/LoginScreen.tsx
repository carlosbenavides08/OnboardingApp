import React, { useEffect, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import {
    View,
    ScrollView,
    Image,
    Dimensions,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    Platform,
} from 'react-native'

import SplashScreen from 'react-native-splash-screen'

import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { stylesLogin } from '../styles'
import mundoApi from '../api/mundoApi'
import { User } from '../interfaces/User'

const { width, height } = Dimensions.get('window')

interface Props extends StackScreenProps<any, any>{}

export const LoginScreen = ({ navigation }: Props) => {
    const [colorCheckbox, setColorCheckbox] = useState('black')
    const [checked, setChecked] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [buttonTextDisabled, setButtonTextDisabled] = useState(true)
    const [studentCode, setStudentCode] = useState('')
    const [user, setUser] = useState('')

    useEffect(() => {
        checkStudentCode()
    }, [])

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    const checkStudentCode = async() => {
        const code = await AsyncStorage.getItem('studentCode')
        setUser(code!)

        if (code !== '') {
            setChecked(true)
            changeColorCheckbox()
            setButtonDisabled(false)
            setButtonTextDisabled(false)
        }
    }

    const changeColorCheckbox = () => {
        if (colorCheckbox === 'black') {
            setColorCheckbox('#E50A17')
            setChecked(true)
        } else {
            setColorCheckbox('black')
            setChecked(false)
        }
    }

    const validateText = (value: string) => {
        setUser(value)
        setStudentCode(value)
        if (value.length > 0) {
            setButtonDisabled(false)
            setButtonTextDisabled(false)
        } else {
            setButtonDisabled(true)
            setButtonTextDisabled(true)
        }
    }

    const handleLogin = async() => {
        const { data } = await mundoApi.post<User>('/auth/login', { studentCode: user })
        const resp = JSON.stringify(data)
        const convert = resp.replace(/\\/g, '')
        console.log(convert)
        // await AsyncStorage.setItem('user', convert.id)

        if (checked) {
            await AsyncStorage.setItem('studentCode', studentCode)
        }

        navigation.replace('TabsHome')
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
        >
            <ScrollView style={ stylesLogin.scrollContainer }>
                <View style={[
                    stylesLogin.loginContainer,
                    {
                        height: height
                    }
                ]}>
                    <View style={ stylesLogin.headerContainer }>
                        <Image
                            source={ require('../assets/mundos.png') }
                            resizeMode="contain"
                            style={[
                                stylesLogin.imageHeader,
                                {
                                    width: width,
                                }
                            ]}
                        />
                    </View>
                    <View style={ stylesLogin.bodyContainer }>
                        <Text style={ stylesLogin.welcomeTextOne }>BIENVENIDO A</Text>
                        <Text style={ stylesLogin.welcomeTextTwo }>MI MUNDO UPC</Text>
                        <Text style={ stylesLogin.enterText }>
                            Ingresa tu código de alumno y descubre
                            <Text style={ stylesLogin.enterTextBold }> Mi mundo UPC.</Text>
                        </Text>
                        <View style={{ marginTop: 24 }}>
                            <FloatingLabelInput
                                label='Código de alumno'
                                multiline={ false }
                                containerStyles={ stylesLogin.userTextInput }
                                customLabelStyles={{ topFocused: -15 }}
                                labelStyles={{ paddingHorizontal: 16  }}
                                inputStyles={ stylesLogin.inputStyles }
                                onChangeText={ value => validateText(value) }
                                value={ user }
                            />
                        </View>
                        <BouncyCheckbox
                            size={20}
                            fillColor="#E50A17"
                            unfillColor="#FFFFFF"
                            text='Recordar mi código'
                            iconStyle={[
                                stylesLogin.checkboxIcon,
                                { borderColor: colorCheckbox }
                            ]}
                            textStyle={ stylesLogin.checkboxText }
                            style={{ marginTop: 24, marginBottom: 30 }}
                            innerIconStyle={{ borderWidth: 0 }}
                            isChecked={ checked }
                            onPress={ changeColorCheckbox }
                            disableBuiltInState
                        />
                        <TouchableOpacity
                            activeOpacity={ 1 }
                            style={[
                                stylesLogin.buttonLogin,
                                buttonDisabled ? stylesLogin.buttonDisabled : null
                            ]}
                            disabled={ buttonDisabled }
                            onPress={ handleLogin }
                        >
                            <View>
                                <Text style={[
                                    stylesLogin.buttonLoginText,
                                    buttonTextDisabled ? stylesLogin.buttonTextLoginDisabled : null
                                ]}>
                                    Ingresar
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
