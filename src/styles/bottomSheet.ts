import { StyleSheet } from 'react-native'

const stylesBottomSheet = StyleSheet.create({
    contaner: {
        width: '100%',
        height: 330,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        zIndex: 100,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    headerTitle: {
        color: 'black',
        fontFamily: 'SolanoGothicMVB-Bd',
        fontSize: 20,
        lineHeight: 32,
    },
    body: {
        marginTop: 8,
        paddingHorizontal: 20,
    },
    question: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 14,
        lineHeight: 20,
    },
    response: {
        marginTop: 40,
    },
    boxNumberContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12,
    },
    boxNumber: {
        borderWidth: 1,
        borderColor: '#42526A',
        borderRadius: 8,
        width: 48,
        height: 56,
    },
    textBoxNumber: {
        color: 'black',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#E50A17',
        paddingVertical: 18,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 14,
        marginTop: 48,
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

export {
    stylesBottomSheet
}
