import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import ForgotPasswordPage from '../ForgotPasswordPage';
import HomePage from '../HomePage';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Registro" component={RegisterPage} />
        <Stack.Screen name="Recuperacao de Senha" component={ForgotPasswordPage} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;