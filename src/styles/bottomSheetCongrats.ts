import { StyleSheet } from 'react-native'

const stylesBottomSheetCongrats = StyleSheet.create({
    contaner: {
        width: '100%',
        height: 330,
        backgroundColor: '#D8DEFF',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        zIndex: 99,
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
    circleClose: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        alignItems: 'center',
    },
    levelText: {
        color: '#42526A',
        textAlign: 'center',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 8,
    },
})

export {
    stylesBottomSheetCongrats
}
