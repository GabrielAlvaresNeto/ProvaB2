import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native-web";

export default function Cartao(props){
    return (
        <View style={styles.cartao}>
            <View style={styles.descritivo}>
                <View>
                    <Image
                        style={styles.imagem}
                        source={{ uri: props.rpg.url }}>
                    </Image>
                </View>
                <View style={styles.textos}>
                    <Text style={styles.nomeItem}>
                        {props.rpg.titulo}
                    </Text>
                    <Text style={styles.poder}>
                        Ataque: {props.rpg.ataque}
                    </Text>
                    <Text style={styles.poder}>
                        Defesa: {props.rpg.defesa}
                    </Text>
                    <Text style={styles.poder}>
                        Vida: {props.rpg.vida}
                    </Text>
                    <Text style={styles.poder}>
                        Habilidade: {props.rpg.habilidade}
                    </Text>
                </View>
            </View>
            
            <View style={styles.botaoView}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.text_botao}>Trocar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartao: {
        marginTop: '20px',
        marginBottom: '10px',
        flexDirection: 'column',
        width: "90%",
        height: '300px',
        backgroundColor: '#024959',
        borderRadius: 15
    },
    descritivo: {
        flexDirection: 'row',
        height: '250px'
    },
    imagem: {
        marginTop: "25px",
        marginBottom: "75px",
        marginLeft: "15px",
        width: "150px",
        height: "200px",
        borderRadius: 15,
        resizeMode: 'fill'
    },
    textos: {
        width: '50%',
        marginLeft: '8px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '250px'
    },
    nomeItem: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '30px',
        color: '#0CF25D'
    },
    poder: {
        fontSize: '19px',
        fontWeight: '600',
        color: 'white'
    },
    botaoView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'centar',
        justifyContent: 'center'
    },
    botao: {
        width: '95%',
        height: '40px',
        borderRadius: 15,
        marginBottom: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#038C3E',
    },
    text_botao: {
        color: 'white',
        fontSize: 18
    }
});