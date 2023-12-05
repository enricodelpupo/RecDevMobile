import React from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-web';

const RegisterPage = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Registro</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ width: 300, marginBottom: 20, backgroundColor: 'white'}}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={{ width: 300, marginBottom: 20, backgroundColor: 'white' }}
      />
      <Button title="Voltar ao Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default RegisterPage;