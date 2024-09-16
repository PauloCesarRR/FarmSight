import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas da aplicação
import Login from './src/components/LoginScreen';
import CadastroUsuario from './src/components/UserRegister';
import Dashboard from './src/components/DashboardScreen';
import Fazenda from './src/components/FarmRegister';
import PerfilUsuario from './src/components/UserProfile';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Fazenda" component={Fazenda} options={{ headerShown: false }} />
        <Stack.Screen name="PerfilUsuario" component={PerfilUsuario}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

