import {View, Text, Button, StyleSheet} from 'react-native'

export default function HomeScreen({ navigation }) {  
  return <>
    <View style={styles.container}>
      <Text style={styles.titulo}>Blanca Ribeiro Silva</Text>
      <Button
        title="Meus compromissos"
        onPress={() => navigation.navigate('Meus compromissos')}
      />
      <Button
        title="Compromissos da equipe"
        onPress={() => navigation.navigate('Compromissos da equipe')}
      />
    </View>
  </>
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 24 }
});