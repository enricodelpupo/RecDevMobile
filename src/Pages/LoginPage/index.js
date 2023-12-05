import React from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ width: 300, marginBottom: 20, backgroundColor: 'white' }}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={{ width: 300, marginBottom: 20, backgroundColor: 'white' }}
      />
      <Button title="Entrar" onPress={() => navigation.navigate('Home')} />
      <Button title="Registro" onPress={() => navigation.navigate('Registro')} />
      <Button title="Esqueci a senha" onPress={() => navigation.navigate('Recuperacao de Senha')} />
    </View>
  );
};

export default LoginPage;