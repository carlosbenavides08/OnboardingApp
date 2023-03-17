import { StyleSheet } from 'react-native'

const stylesQualifyMission = StyleSheet.create({
    title: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 14,
        lineHeight: 20,
    },
    container: {
        alignSelf: 'center',
        maxWidth: 320,
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 4,
        marginTop: 24,
    },
    legendContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    legendStartText: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        width: 80,
        textAlign: 'center',
        marginLeft: -8,
    },
    legendEndText: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        width: 80,
        textAlign: 'center',
        marginRight: -14,
    },
    button: {
        backgroundColor: '#E50A17',
        paddingVertical: 18,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 14,
        marginTop: 36,
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
    stylesQualifyMission
}
