import { StyleSheet } from 'react-native'

const stylesBottomSheetMessage = StyleSheet.create({
    contaner: {
        width: '100%',
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
    circleClose: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        marginTop: 8,
        paddingHorizontal: 20,
    },
    button: {
        paddingVertical: 18,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: '#E50A17',
        marginTop: 32,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 16,
    },
})

export {
    stylesBottomSheetMessage
}
