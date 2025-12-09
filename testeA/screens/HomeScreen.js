import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda do dia</Text>
      <Text style={styles.ident}>Blanca Ribeiro Silva</Text>
      <Text style={styles.ident}>8º Semestre de Ciência da Computação</Text>
      <View style={styles.spacing}></View>
      <Button
        title="Meus compromissos"
        onPress={() => navigation.navigate('Meus compromissos')}
      />
      <Button
        title="Compromissos da equipe"
        onPress={() => navigation.navigate('Compromissos da equipe')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  ident: {
    textAlign: 'center'
  },
  spacing: {
    marginBottom: 50
  }
});