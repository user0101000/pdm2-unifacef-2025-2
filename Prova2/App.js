import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DayScreen from './screens/DayScreen';
import WeekScreen from './screens/WeekScreen';    

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Compromissos do dia" component={DayScreen} />
        <Stack.Screen name="Compromissos da semana" component={WeekScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}