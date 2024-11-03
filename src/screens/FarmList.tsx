import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';

const FarmsList = () => {
  const [fazendas, setFazendas] = useState([]);

  useEffect(() => {
    const fetchFazendas = async () => {
      const response = await fetch('http://localhost:8080/farm');
      const data = await response.json();
      setFazendas(data);
    };

    fetchFazendas();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:8080/farms/${id}`, {
        method: 'DELETE',
      });
    

      <Button title='Criar' onPress={handleSubmit(fazenda)}/>

    </View>  

  );
};


const styles = StyleSheet.create({  setFazendas(fazendas.filter((fazenda) => fazenda.id !== id));
      alert('Fazenda deletada com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar fazenda:', error);
      alert('Erro ao deletar fazenda. Tente novamente.');
    }
  };

  return (
    <FlatList
      data={fazendas}
      renderItem={({ item }) => (
        <Text>{item.name}</Text>
        <Text>{item.localization}</Text>
        <Text>{item.acre}</Text>
        <Text>{item.culture}</Text>
        <Button title="Deletar" onPress={() => handleDelete(item.id)} />
      )}
    />
  );
};