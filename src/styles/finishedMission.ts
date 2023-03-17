import { StyleSheet } from 'react-native'

const stylesFinishedMission = StyleSheet.create({
    contaner: {
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        color: '#E50A17',
        fontFamily: 'SolanoGothicMVB-Bd',
        fontSize: 32,
        lineHeight: 44,
        marginTop: 28,
    },
    missionsContainer: {
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#CCD9EC',
        width: 240,
        marginTop: 22,
    },
    missionsText: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 16,
        lineHeight: 24,
        paddingVertical: 16,
    },
    secondaryText: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 14,
        lineHeight: 20,
        width: 240,
        textAlign: 'center',
        marginTop: 22,
    },
    button: {
        backgroundColor: '#E50A17',
        paddingVertical: 18,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 14,
        marginTop: 34,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 16,
    },
})

export {
    stylesFinishedMission
}
