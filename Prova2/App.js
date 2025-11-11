import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CompromissosDia from './screens/CompromissosDia';
import CompromissosSemana from './screens/CompromissosSemana';    

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="COMPROMISSOS DO DIA" component={CompromissosDia} />
        <Stack.Screen name="COMPROMISSOS DA SEMANA" component={CompromissosSemana} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}