import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'

interface Props {
    navigation: StackNavigationProp<RootStackParams, "LoginScreen", undefined>
}

export const TermsScreen = ({ navigation }: Props) => {
    return (
        <>
            <View style={ styles.header }>
                <Text style={ styles.headerText }>TÉRMINOS Y CONDICIONES DE USO</Text>
                <TouchableOpacity
                    activeOpacity={ 1 }
                    onPress={ () => navigation.replace('LoginScreen') }
                >
                    <Image
                        source={ require('../assets/ic-sm-error.png') }
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 32 }}>
                <Text style={ styles.contentText }>
                    Los presentes términos y condiciones de uso (en adelante, “
                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}>Condiciones de Uso</Text>
                    ”) regulan el uso de la aplicación Mi Mundo UPC.
                    {'\n\n'}
                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}>
                        1. Mi Mundo UPC
                    </Text>
                    {'\n'}
                    El usuario declara conocer que, para acceder y usar la aplicación, deberá ser alumno de la UPC y tener su código de alumno vigente.
                    {'\n\n'}
                    Esta aplicación está compuesta por diferentes mundos, niveles y misiones que ayudarán a alumnos de UPC a insertarse a la vida universitaria. Por lo que usuario podrá:
                    {'\n\n'}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#42526A' }}>{'\u25CF'}</Text>
                        <Text style={{ color: '#42526A' }}> Acceder a la aplicación con su código de alumno</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#42526A' }}>{'\u25CF'}</Text>
                        <Text style={{ color: '#42526A' }}> Visualizar los mundos, niveles y misiones habilitados</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#42526A' }}>{'\u25CF'}</Text>
                        <Text style={{ color: '#42526A' }}> Completar las misiones y ver su progreso</Text>
                    </View>
                    {'\n\n'}
                    El usuario podrá avanzar a su ritmo y de forma voluntaria, dependiendo de las misiones, niveles y mundos desbloqueados.
                    {'\n\n'}
                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}>
                        2. Aceptación y modificaciones
                    </Text>
                    {'\n'}
                    Las Condiciones de Uso se encuentran a disposición del usuario en el login de la aplicación para su conservación y posterior consulta.
                    {'\n\n'}
                    El usuario acepta de manera voluntaria y sin reservas todas las estipulaciones contenidas en las presentes Condiciones de Uso. Asimismo, el usuario declara conocer que estas Condiciones de Uso podrán ser eventualmente modificadas, complementadas y/o sustituidas por UPC, siendo efectivas estas modificaciones desde su publicación en la aplicación, sin necesidad de intervención, autorización previa o confirmación posterior del usuario.
                </Text>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(248, 250, 253, 0.8)',
        paddingVertical: 14,
        paddingHorizontal: 20,
    },
    headerText: {
        color: 'black',
        paddingVertical: 8,
        paddingLeft: 8,
        fontFamily: 'SolanoGothicMVB-Bd',
        fontSize: 20,
        lineHeight: 32,
    },
    contentText: {
        flexDirection: 'row',
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 16,
        marginBottom: 80,
    },
    title: {
        color: '#42526A',
        fontFamily: 'SolanoGothicMVB-Bd',
        fontSize: 18,
    },
})
