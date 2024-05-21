import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

interface Usuario {
  email: string;
  senha: string;
}

const Login: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    email: '',
    senha: '',
  });

  const handleSubmit = () => {
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={usuario.email}
        onChangeText={(email) => setUsuario({ ...usuario, email })}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={usuario.senha}
        onChangeText={(senha) => setUsuario({ ...usuario, senha })}
      />

      <Button title="Entrar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default Login;
