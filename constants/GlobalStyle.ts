import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button2: {
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.18)',
        backgroundColor: 'rgba(241, 241, 241, 1)',
        padding: 14,
        borderRadius: 8
    }
})