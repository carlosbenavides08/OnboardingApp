import { StyleSheet } from "react-native";

const stylesHeader = StyleSheet.create({
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
        fontFamily: 'SolanoGothicMVB-Bd',
        fontSize: 20,
        lineHeight: 32,
    },
})

export {
    stylesHeader
}