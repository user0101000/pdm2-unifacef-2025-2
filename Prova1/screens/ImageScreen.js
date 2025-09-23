import { View, Image, StyleSheet } from 'react-native';

export default function App() {
return (
  <View style={styles.container}>
    <Image source={require('./assets/logo.png')} style={styles.imagem} />
    <Text style={styles.titulo}>Tela de Imagem</Text>
    <Button title="Voltar" onPress={() => navigation.goBack()} />
  </View>
 );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imagem: { width: 200, height: 200, resizeMode: 'contain' }
});