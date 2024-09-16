import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { useForm } from 'react-hook-form';


interface Fazenda {
  nome: string;
  localizacao: string;
  area: number;
  cultura: string;
}



const Farms: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const [fazenda, setFazenda] = useState<Fazenda>({
    nome: '',
    localizacao: '',
    area: 0,
    cultura: '',
  });

 
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Dados de Fazenda</Text>

      <TextInput
        {...register('nome', { required: 'Campo obrigatório' })}
        style={styles.input}
        placeholder="Nome da Fazenda"
        value={fazenda.nome}
        onChangeText={(nome) => setFazenda({ ...fazenda, nome })}
      />

      <TextInput
        {...register('localizacao', { required: 'Campo obrigatório' })}
        style={styles.input}
        placeholder="Localização"
        value={fazenda.localizacao}
        onChangeText={(localizacao) => setFazenda({ ...fazenda, localizacao })}
      />

      <TextInput
        {...register('area', { required: 'Campo obrigatório', min: 1 })}
        style={styles.input}
        placeholder="Área (hectares)"
        value={fazenda.area.toString()} // Converter para string para o `min`
        onChangeText={(area) => setFazenda({ ...fazenda, area: parseFloat(area) })}
        keyboardType="number-pad" // Teclado numérico
      />

      <TextInput
        {...register('cultura', { required: 'Campo obrigatório' })}
        style={styles.input}
        placeholder="Cultura"
        value={fazenda.cultura}
        onChangeText={(cultura) => setFazenda({ ...fazenda, cultura })}
      />

    </View>  

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: 16
  }
});

export default Farms;