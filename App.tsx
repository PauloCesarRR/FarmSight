import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas da aplicação
import Login from './src/screens/LoginScreen';
import Register from './src/screens/UserRegister';
import Dashboard from './src/screens/DashboardScreen';
import Farms from './src/screens/FarmRegister';
import Profile from './src/screens/UserProfile';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Farms" component={Farms} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

