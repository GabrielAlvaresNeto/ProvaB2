import { Text, View, StyleSheet } from "react-native";

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Página de Dashboard</Text>
            <Text style={styles.texto}>Em Processo...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    },
    texto: {
        fontSize: 18,
        fontWeight: 600
    }
})