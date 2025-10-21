import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return <>
    <View>
      <Text style={styles.titulo}>Tela Inicial</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Detalhes')}
      />
      <Button
        title="Ir para Imagem"
        onPress={() => navigation.navigate('Imagem')}
      />
      <Button
        title="Ir para Imagem"
        onPress={() => navigation.navigate('Imagem')}
      />
    </View>
  </>
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold' }
});