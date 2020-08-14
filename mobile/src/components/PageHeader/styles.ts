import { StyleSheet } from "react-native";
import { Archivo_700Bold } from "@expo-google-fonts/archivo";

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: "#8257e5"
    },

    topBar: {
        paddingTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    title: {
        fontFamily: "Archivo_700Bold",
        color: "#fff",
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 30
    }
});

export default styles;