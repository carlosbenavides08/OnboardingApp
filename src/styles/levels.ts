import { StyleSheet } from 'react-native'

const stylesLevels = StyleSheet.create({
    levelsContainer: {
        flex: 1,
        backgroundColor: '#F8FAFD',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D8DEFF',
        paddingVertical: 14,
        paddingHorizontal: 20,
    },
    headerText: {
        color: 'black',
        paddingVertical: 20,
        paddingLeft: 20,
        fontFamily: 'SolanoGothicMVBStdBd',
        fontSize: 20,
        lineHeight: 32,
    },
    hero: {
        alignItems: 'center',
        backgroundColor: '#D8DEFF',
    },
    imageHero: {
        width: 216,
        height: 120,
        resizeMode: 'cover',
    },
    starsWrapper: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#A3B4CC',
        borderRadius: 20,
        paddingVertical: 4,
        paddingLeft: 4,
        paddingRight: 8,
        marginTop: 16,
        marginBottom: 24,
        marginLeft: 16,
    },
    imageStar: {
        width: 16,
        height: 16,
    },
    starsCount: {
        color: 'black',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 14,
        lineHeight: 15,
        marginLeft: 5,
    },
    starsTotal: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 14,
        fontWeight: '500',
    },
    bodyContainer: {
        alignItems: 'center',
    },
    roadMap: {
        width: 320,
        alignItems: 'center',
        paddingVertical: 100,
    },
    levelContent: {
        position: 'relative',
        width: 152,
        alignItems: 'center',
    },
    level1: {
        position: 'absolute',
        top: 40,
        left: 0,
    },
    level2: {
        position: 'absolute',
        top: 220,
        right: 5,
    },
    level3: {
        position: 'absolute',
        top: 380,
        left: 0,
    },
    level4: {
        position: 'absolute',
        top: 535,
        right: 5,
    },
    level5: {
        position: 'absolute',
        top: 700,
        left: 0,
    },
    level6: {
        position: 'absolute',
        top: 860,
        right: 5,
    },
    level7: {
        position: 'absolute',
        top: 1020,
        left: 0,
    },
    level8: {
        position: 'absolute',
        top: 1180,
        right: 5,
    },
    level9: {
        position: 'absolute',
        top: 1340,
        left: 0,
    },
    level10: {
        position: 'absolute',
        top: 1500,
        right: 5,
    },
    level11: {
        position: 'absolute',
        top: 1660,
        left: 0,
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
    goalWrapper: {
        flexDirection: 'row',
        width: 320,
        paddingVertical: 16,
        paddingHorizontal: 28,
        marginTop: 130,
        marginBottom: 48,
        backgroundColor: '#E6EDF3',
        borderRadius: 20,
        gap: 24,
    },
    goalTitle: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 14,
        lineHeight: 20,
    },
    goalDescription: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 16,
        lineHeight: 24,
        width: 184,
    },
})

export {
    stylesLevels
}
