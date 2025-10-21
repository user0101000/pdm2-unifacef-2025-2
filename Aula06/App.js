import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando as telas
import CadastroScreen from './screens/CadastroScreen'; // Novo arquivo para cadastro
import DetailsScreen from './screens/DetailsScreen'; // Novo arquivo para exibir os dados cadastrados

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            {/* Definindo o formulário de cadastro como rota inicial para o Desafio */}
            <Stack.Navigator initialRouteName="Cadastro">
                <Stack.Screen 
                    name="Cadastro" 
                    component={CadastroScreen} 
                    options={{ title: 'Cadastro Completo' }}
                />
                <Stack.Screen 
                    name="Details" 
                    component={DetailsScreen} 
                    options={{ title: 'Dados do Cadastro' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}