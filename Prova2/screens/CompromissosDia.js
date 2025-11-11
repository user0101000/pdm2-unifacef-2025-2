import {View, Text, StyleSheet} from 'react-native'

export default function CompromissosDia({ navigation }) {  
  return <>
    <View style={styles.container}>
      <Text style={styles.titulo}>11/11 (ter)</Text>
      <Text style={styles.subtitulo}>Blanca Ribeiro Silva - 8º Semestre de Ciência da Computação</Text>
      <Text style={styles.medico}>08h00: Médico</Text>
      <Text style={styles.reuniao}>10h30: Reunião de planejamento</Text>
      <Text style={styles.saida}>15h00: Saída viagem</Text>
    </View>
  </>
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 24 }, subtitulo: { fontSize: 18, marginBottom: 20 },
  medico: { fontSize: 16, marginBottom: 10 },
  reuniao: { fontSize: 16, marginBottom: 10 },
  saida: { fontSize: 16, marginBottom: 10 },
});