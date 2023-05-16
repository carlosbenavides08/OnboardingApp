import { StyleSheet } from 'react-native'

const stylesLevels = StyleSheet.create({
    levelsContainer: {
        flex: 1,
        backgroundColor: '#F8FAFD',
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
        backgroundColor: '#F8FAFD',
    },
    roadMap: {
        width: 320,
        alignItems: 'center',
        paddingVertical: 100,
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
    missionContainerLocked: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        zIndex: 90,
    },
})

export {
    stylesLevels
}
