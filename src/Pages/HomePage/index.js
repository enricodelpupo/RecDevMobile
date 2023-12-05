import React from 'react';
import { View, Text, Button } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple' }}>
      <Text style={{ fontSize: 24 }}>Bem-vindo à Tela Principal</Text>
      <Button title="Sair" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default HomePage;