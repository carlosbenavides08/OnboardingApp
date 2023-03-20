import { StyleSheet } from 'react-native'

const stylesLogin = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    loginContainer: {
        flex: 1,
    },
    headerContainer: {

    },
    imageHeader: {
        height: 300,
        resizeMode: 'cover',
    },
    bodyContainer: {
        position: 'relative',
        flex: 1,
        marginTop: 42,
        paddingHorizontal: 20,
    },
    welcomeTextOne: {
        color: 'black',
        fontSize: 36,
        fontFamily: 'SolanoGothicMVB-Bd',
        lineHeight: 48,
    },
    welcomeTextTwo: {
        color: '#E50A17',
        fontSize: 36,
        fontFamily: 'SolanoGothicMVB-Bd',
        lineHeight: 48,
    },
    enterText: {
        color: '#42526A',
        fontSize: 16,
        fontFamily: 'WhitneyHTF-Medium',
        lineHeight: 24,
    },
    enterTextBold: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 16,
        lineHeight: 24,
    },
    userTextInput: {
        borderWidth: 1,
        borderColor: '#42526A',
        borderRadius: 8,
        fontWeight: 500,
        height: 56,
    },
    inputStyles: {
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        marginTop: 10,
        paddingHorizontal: 16,
    },
    checkboxIcon: {
        borderRadius: 4,
        borderWidth: 1,
        marginRight: -5,
    },
    checkboxText: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 14,
        textDecorationLine: 'none',
    },
    buttonLogin: {
        position: 'absolute',
        right: 20,
        left: 20,
        bottom: 28,
        paddingVertical: 18,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: '#E50A17',
    },
    buttonDisabled: {
        backgroundColor: '#E6EDF3',
    },
    buttonLoginText: {
        color: 'white',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 16,
    },
    buttonTextLoginDisabled: {
        color: '#A3B4CC',
    },
})

export {
    stylesLogin
}