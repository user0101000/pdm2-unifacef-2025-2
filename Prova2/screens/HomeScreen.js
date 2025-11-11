import {View, Text, Button, StyleSheet} from 'react-native'

export default function HomeScreen({ navigation }) {  
  return <>
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda</Text>
      <Text style={styles.subtitulo}>Blanca Ribeiro Silva - 8º Semestre de Ciência da Computação</Text>
      <Button
        title="Compromissos do dia"
        onPress={() => navigation.navigate('Compromissos do dia')}
      />
      <Button
        title="Compromissos da semana"
        onPress={() => navigation.navigate('Compromissos da semana')}
      />
    </View>
  </>
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 24 }, subtitulo: { fontSize: 16 }
});