import { StyleSheet } from 'react-native'

const stylesLevel = StyleSheet.create({
    levelContent: {
        position: 'relative',
        width: 152,
        alignItems: 'center',
    },
    textLevel: {
        color: '#E50A17',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 12,
    },
    textLevelLocked: {
        color: '#67778F',
    },
    textLevelDescription: {
        color: 'black',
        fontFamily: 'SolanoGothicMVBStdBd',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 4,
        textAlign: 'center',
    },
    textLevelDescriptionLocked: {
        color: '#67778F',
    },
    textMissionsCompleted: {
        color: 'black',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 4,
    },
    textMissionsTotal: {
        color: '#67778F',
        fontFamily: 'WhitneyHTF-Medium',
    },
    lockedMissionsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    lockedMissionsText: {
        color: '#67778F',
        marginLeft: 6,
        fontFamily: 'WhitneyHTF-Medium'
    },
})

export {
    stylesLevel
}
