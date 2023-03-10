import { StyleSheet } from 'react-native'

const stylesBottomSheet = StyleSheet.create({
    contaner: {
        width: '100%',
        height: 330,
        backgroundColor: 'green',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        zIndex: 100,
    }
})

export {
    stylesBottomSheet
}
