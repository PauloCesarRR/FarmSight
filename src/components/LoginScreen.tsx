import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Image } from 'react-native';
import AuthService from '../services/AuthService';

interface Usuario {
  email: string;
  senha: string;
}

const Login: React.FC = ({ navigation }) => {
  const [usuario, setUsuario] = useState<Usuario>({
    email: '',
    senha: '',
  });

  const handleSubmit = () => {
      AuthService(usuario.email, usuario.senha)
    
  };

  return (
    <View style={styles.container}>

      <Image source={require('../../assets/icon.png')} style={styles.logo}/>
      <Text style={styles.title}>FarmSight</Text>


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

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText} >Entrar</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CadastroUsuario')}>
        <Text>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#374151'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#fff',
    color: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10B981',
    borderColor: '#fff',
    color: '#fff',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  logo: {
    width: 64,
    height: 64,
    marginBottom: 16
  }
});

export default Login;
