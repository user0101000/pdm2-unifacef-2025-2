import {Image, Button, StyleSheet, View} from 'react-native'

export default function LocalImageScreen({ navigation }) {
  return <>
    <View style={styles.container}>
      <Image 
        source={require('../assets/chocolate.jpg')} 
        style={{ width: 400, height: 400 }}
      />
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  }
})