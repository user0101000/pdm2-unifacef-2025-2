import {Image, Button, View, StyleSheet} from 'react-native'

export default function WebImageScreen({ navigation }) {
  return <>
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://blog.coffeemais.com/wp-content/uploads/2022/01/cafe-tem-gluten-topo.jpg' }} 
        style={{ width: 300, height: 240 }}
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
    backgroundColor: 'tan' 
  },
  
});