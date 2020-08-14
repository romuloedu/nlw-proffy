import { StyleSheet } from "react-native";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f7",
    },

    teacherList: {
        marginTop: -30
    },

    searchForm: {
        marginBottom: 14
    },

    label: {
        color: "#d4c2ff",
        fontFamily: "Poppins_400Regular"
    },

    input: {
        height: 54,
        backgroundColor: "#fff",
        borderRadius: 8,
        justifyContent: "center",
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },

    inputGroup: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    inputBlock: {
        width: "48%"
    },

    submitButton: {
        backgroundColor: "#04d361",
        height: 56,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    submitButtonText: {
        color: "#fff",
        fontFamily: "Archivo_700Bold",
        fontSize: 16
    }
});

export default styles;