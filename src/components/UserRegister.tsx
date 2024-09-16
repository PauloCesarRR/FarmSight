import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, TouchableOpacity } from 'react-native';

interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

const CadastroUsuario: React.FC = ({ navigation }) => {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: '',
    email: '',
    senha: '',
  });

  const handleSubmit = () => {
    // Validar dados do usuário
    // Enviar dados do usuário para API
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={usuario.nome}
        onChangeText={(nome) => setUsuario({ ...usuario, nome })}
      />

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

      <Button title="Cadastrar" onPress={handleSubmit} />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>

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

export default CadastroUsuario;


