import { Button, Text, View } from "react-native";
import { styles } from "../config/styles";


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.container_home}>
                <Text style={styles.alinhamento}>Bem-Vindo(a)!!!</Text>
                <Text>{"\n"}</Text>
                <Text style={styles.alinhamento} >Essa é a tela inicial 😁</Text>
            </View>
        </View>
    )
}