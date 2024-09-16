import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

const Profile: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    //TODO: Buscar dados do usuário logado da API
  }, []);

  if (!usuario) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>

      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>{usuario.nome}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{usuario.email}</Text>
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
  },
});

export default Profile;
