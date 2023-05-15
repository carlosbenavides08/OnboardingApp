import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'

interface Props {
    navigation: StackNavigationProp<RootStackParams, "LoginScreen", undefined>
}

export const PrivacyScreen = ({ navigation }: Props) => {
    return (
        <>
            <View style={ styles.header }>
                <Text style={ styles.headerText }>POLÍTICA DE PRIVACIDAD</Text>
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
                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}>
                        1. Identidad y domicilio
                    </Text>
                    {'\n'}
                    Universidad Peruana de Ciencias Aplicadas, (en adelante, “UPC”), con R.U.C: 20211614545 domiciliada en Av. Prolongación Primavera 2390, Monterrico, Santiago de Surco, Lima, Perú.
                    {'\n\n'}
                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}>
                        2. Objetivo
                    </Text>
                    {'\n'}
                    Para UPC su privacidad es importante y queremos que entienda nuestra política relacionada a cómo recogemos información de los visitantes a esta aplicación, asimismo, con respecto al uso que hacemos de dicha información. Por favor, lea con cuidado la información brindada a través de esta aplicación, ya que ciertas secciones de la aplicación pueden contener cambios a la Declaración de Privacidad aplicable al uso que le dé a esa sección. Por ejemplo, ciertas secciones pueden solicitarle información adicional.
                    {'\n\n'}
                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}>
                        3. Información y usos
                    </Text>
                    {'\n'}
                    Al ingresar a la aplicación, nuestro servidor automáticamente recoge información que permite a la aplicación comunicarse con el dispositivo del visitante. También recogemos información respecto a la aplicación como número de visitas, número de clics en botones, dirección IP (la dirección de Internet asignada a su dispositivo por su proveedor del servicio de Internet), fecha y hora. Usamos ese tipo de información con propósitos estadísticos que nos ayudan a analizar la información recolectada para mejorar nuestra aplicación. Este tipo de información no contiene información personal que nos permita identificar o localizar al visitante.
                    {'\n'}
                    Las preocupaciones sobre privacidad se concentran en el tema de la información personal, es decir, la información que pudiera identificar a un individuo específico con nombre, dirección, correo electrónico y número de teléfono. Si durante su interacción con la aplicación, llena un formulario, solicita algo o participa en un concurso o suministra otra información, usted nos puede estar dando información personal. Es posible que recojamos y usemos esa información personal para suministrarle un producto o servicio, para cobrarle por un producto o servicio que solicite, para informarle sobre productos y servicios que creamos y que puedan ser de su interés, o para comunicarnos con usted por cualquier otro motivo.
                    {'\n'}
                    Cuando usted ingrese información a un formulario con la finalidad de que la UPC le informe sobre nuestras carreras y programas, así como para invitarle a talleres, charlas y eventos informativos, previa autorización sus datos personales serán registrados en nuestro banco de “Prospección” (Reg. 1457), por tiempo indefinido o hasta que ejerza alguno de los derechos previstos en la Ley 29733, Ley de Protección de Datos Personales. Estas mismas condiciones se aplicarán para el tratamiento de sus datos, cuando le invitemos a participar de encuestas, estudios de mercado, focus group y actividades de marketing similares.
                    {'\n'}
                    Asimismo, cuando usted ingrese información a un formulario por el cual se inscriba como postulante a alguna carrera o programa de UPC, sus datos personales serán registrados en nuestro banco de “Admisión” (Reg. 15236), por tiempo indefinido o hasta que ejerza alguno de los derechos previstos en la Ley 29733, con la finalidad de i) Orientarle y brindarle información sobre el proceso y modalidades de admisión; (ii) absolver sus dudas, reclamos y sugerencias; (iii) aplicar nuestras políticas de evaluación para admisión de alumnos; (iv) generar estadísticas o información histórica, de manera anonimizada o disociada; y (v) en general, cumplir con cualquier actividad conexa a su condición de postulante de la UPC.
                    {'\n'}
                    Los datos personales que usted nos proporcione en su condición de alumno serán almacenados en nuestro banco de “Alumnos” (Reg. 1461), por tiempo indefinido o hasta que ejerza alguno de los derechos previstos en la Ley 29733, para el cumplimiento de la prestación de los servicios educativos y de gestión académica brindados por UPC, y las finalidades para cuales oportunamente se haya recabado su consentimiento conforme a ley.
                    {'\n'}
                    Tal como se explica abajo, en la sección de Diseminación de información a terceros, no distribuimos o vendemos información a terceros a fin de permitirles que le informen acerca de sus productos y servicios.
                    {'\n\n'}
                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}>
                        4. Hiperlinks
                    </Text>
                    {'\n'}
                    Esta aplicación podría contener links a sites de los que UPC no es dueño, no controla o mantiene. No podemos hacernos responsables por sus políticas o prácticas de privacidad y no representamos ni garantizamos la políticas de privacidad de esos sites. De igual modo, no somos responsables por las políticas o prácticas de ningún site desde el cual usted se conectó con nuestra aplicación. Recomendamos que verifique la política de privacidad de otros site y que se comunique con el operador si tuviese alguna duda o pregunta.
                    {'\n\n'}
                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}>
                        5. Diseminación de información a terceros
                    </Text>
                    {'\n'}
                    La UPC no vende o distribuye su información personal a terceros a fin de permitirles promocionar sus productos o servicios. Sin embargo, la UPC podrá tratar sus datos personales directamente o podrá contratar a terceros para la realización de sus actividades, los cuales pueden encontrarse dentro o fuera del Perú. La UPC y estos terceros han adoptado las medidas de seguridad, técnicas, legales y organizativas necesarias para resguardar sus datos personales.
                    {'\n'}
                    Actualmente, los terceros encargados de tratar sus datos personales recopilados por vía se este site son: ITG SOLUTIONS S.A.C., con domicilio en Av. Carnaval y Moreyra Nro. 230 Dpto. B Int. 3 Piso, San Isidro, Lima; Microsoft Corporation, con domicilio en: One Microsoft Way, Redmond, Washington 98052, USA y Laureate Education Inc, ubicada en Baltimore, Maryland, Estados Unidos de América. En caso existan nuevos encargados que pudieran tener acceso o tratar sus datos, está política será actualizada.
                    {'\n\n'}
                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}>
                        6. Información sensible
                    </Text>
                    {'\n'}
                    La UPC no busca ningún tipo de información sensible de los visitantes a esta aplicación a menos que estén legalmente requeridos de hacerlo, por ejemplo, en conexión a reclutamiento o contrato de personal.
                    {'\n'}
                    La UPC acepta su consentimiento explícito para usar esa información de la manera descrita en esta Declaración de Privacidad o en el modo descrito en el punto donde se solicita este tipo de información.
                    {'\n\n'}
                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}>
                        7. Ejercicio de derechos
                    </Text>
                    {'\n'}
                    La UPC garantiza el ejercicio de sus derechos de Acceso, Rectificación, Cancelación y Oposición contenidos en la Ley de Protección de Datos Personales, Ley 29733, y su Reglamento, Decreto Supremo 003-2013-JUS.
                    {'\n'}
                    Para ello, podrá dirigir una comunicación gratuita al siguiente correo electrónico: centrodedatos@upc.edu.pe
                    {'\n\n'}
                    <Text style={{ fontFamily: 'WhitneyHTF-Bold' }}>
                        8. Condiciones de uso, notificaciones y revisiones
                    </Text>
                    {'\n'}
                    Si usted escoge interactuar con nuestra aplicación su visita y cualquier disputa sobre privacidad están sujetas a esta Declaración de Privacidad y a nuestras Condiciones generales de uso, incluyendo cualquier limitación sobre daños, arbitraje de disputas y la aplicación de las provisiones de ley. Nos reservamos el derecho de cambiar esta declaración en cualquier momento, sin aviso excepto en los casos que aquí se consignan.
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
