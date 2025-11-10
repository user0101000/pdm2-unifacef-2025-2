import {View, StyleSheet} from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function IconsScreen() {
  return <>
    <View style={styles.container}>
      <FontAwesome5 name="coffee" size={60} color="red" />
      <Ionicons name="fast-food" size={60} color="green" />
      <AntDesign name="car" size={60} color="blue" />
    </View>
  </>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
    flex: 1, 
    alignItems: 'center',
  }
})