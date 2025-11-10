import {View, Text, Button, StyleSheet} from 'react-native'

export default function HomeScreen({ navigation }) {  
  return <>
    <View style={styles.container}>
      <Text style={styles.titulo}>Fausto Gonçalves Cintra</Text>
      <Button
        title="Imagem da Internet"
        onPress={() => navigation.navigate('Imagem da Internet')}
      />
      <Button
        title="Imagem local"
        onPress={() => navigation.navigate('Imagem local')}
      />
      <Button
        title="Ícones"
        onPress={() => navigation.navigate('Ícones')}
      />
    </View>
  </>
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 24 }
});