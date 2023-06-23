import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import Cartao from "../components/Cartao";

const listaRpg = [
  {
    titulo: "Foice Espectral",
    ataque: "8",
    defesa: "5",
    vida: "9",
    habilidade: "6",
    url: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5fa759c130b75cd5/5fa1f05dcb9eba781f087db8/3862_Marksman_T1_SpectralSickle.png?disposition=inline"
  },
  {
    titulo: "Escudo Relicário",
    ataque: "4",
    defesa: "9",
    vida: "10",
    habilidade: "5",
    url: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt439d99d483550515/5fa1f02389353a72dcaedda9/3858_Tank_T1_RelicShield.png?disposition=inline"
  },
  {
    titulo: "Cronômetro",
    ataque: "2",
    defesa: "4",
    vida: "7",
    habilidade: "10",
    url: "https://noticias.maisesports.com.br/wp-content/uploads/2020/02/cronometro.png"
  },
  {
    titulo: "Lacre Sombrio",
    ataque: "7",
    defesa: "9",
    vida: "8",
    habilidade: "8",
    url: "https://senpai.gg/blog/wp-content/uploads/2020/11/1082_Mage_T1_DarkSeal-1-1.webp"
  }
]

export default function CatalogoRpg({navigation}) {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.titulo}>Itens Disponíveis</Text>
        </View>
        {listaRpg.map(rpg => <Cartao key={rpg.titulo} rpg={rpg}/>)}

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Dashboard", {})}>
            <Text style={styles.text_botao}>Dashboard</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    marginTop: '15px',
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#024959'
  },
  botao: {
    padding: '10px',
    backgroundColor: '#024959',
    marginVertical: '20px',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px'
  },
  text_botao: {
    color: '#F2E3D5'
  }
});