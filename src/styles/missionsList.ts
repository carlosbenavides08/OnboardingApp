import { StyleSheet } from 'react-native'

const stylesMissionsList = StyleSheet.create({
    missionsContainer: {
        flex: 1,
        backgroundColor: '#F8FAFD',
    },
    medalWrapper: {
        flexDirection: 'row',
        gap: 24,
        backgroundColor: '#D8DEFF',
        paddingBottom: 30,
        paddingHorizontal: 20,
    },
    medalDetailWrapper: {
        flex: 1,
    },
    medalText: {
        color: '#191919',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 12,
    },
    medalTitle: {
        color: 'black',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 20,
        lineHeight: 32,
    },
    medalDescription: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 14,
        lineHeight: 20,
    },
    missionsBody: {
        paddingHorizontal: 20,
    },
    listTitle: {
        color: '#E50A17',
        fontFamily: 'SolanoGothicMVBStdBd',
        fontSize: 28,
        lineHeight: 36,
        marginTop: 40,
    },
    disclaimerCard: {
        flexDirection: 'row',
        gap: 8,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#A3B4CC',
        borderBottomColor: '#A3B4CC',
        marginTop: 24,
        paddingVertical: 16,
    },
    disclaimerText: {
        flex: 1,
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 12,
        lineHeight: 16,
        marginRight: 20,
    },
    missionList: {
        marginTop: 32,
        // gap: 20,
    },
    missionCard: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        marginBottom: 20,
        shadowColor: "rgb(203, 213, 220)",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    missionCardLocked: {
        backgroundColor: '#E6EDF3',
    },
    missionCircleEnable: {
        borderWidth: 1,
        borderColor: '#CCD9EC',
        borderRadius: 20,
        width: 16,
        height: 16,
    },
    missionTag: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        borderRadius: 4,
        paddingHorizontal: 8,
    },
    missionTagPending: {
        backgroundColor: '#BBEBFF',
        width: 82,
    },
    missionTagLocked: {
        backgroundColor: '#CCD9EC',
        width: 88,
    },
    missionTagProgress: {
        backgroundColor: '#FFE7C3',
    },
    missionCirclePending: {
        backgroundColor: '#00B2FF',
        width: 6,
        height: 6,
        borderRadius: 10,
    },
    missionCircleLocked: {
        backgroundColor: 'black',
        width: 6,
        height: 6,
        borderRadius: 10,
    },
    missionTagText: {
        color: '#00405B',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 10,
        lineHeight: 16,
    },
    missionTitle: {
        color: 'black',
        fontFamily: 'SolanoGothicMVBStdBd',
        fontSize: 18,
        lineHeight: 28,
    },
    missionNumberText: {
        color: '#67778F',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 12,
        lineHeight: 16,
    },
})

export {
    stylesMissionsList
}
