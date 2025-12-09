import { View, Image, StyleSheet, Text, Button } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.imagem} />
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 100, height: 100 }}
      />
      <FontAwesome name="home" size={40} color="blue" />
      <Text style={styles.texto}>Página Inicial</Text>
      <MaterialIcons name="punch-clock" size={64} color="black" />
      <Button
        title="Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imagem: { width: 200, height: 200, resizeMode: 'contain' },
  texto: { fontSize: 20, marginTop: 10 }
});
