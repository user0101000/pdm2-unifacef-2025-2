import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CompromissosEquipe from './screens/CompromissosEquipe';
import MeusCompromissos from './screens/MeusCompromissos'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Meus compromissos" component={MeusCompromissos} />
        <Stack.Screen name="Compromissos da equipe" component={CompromissosEquipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}