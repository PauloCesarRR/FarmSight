import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../components/Header';

interface DadoAgro {
  id: number;
  title: string;
  value: number;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DadoAgro[]>([]);

  useEffect(() => {
    // Buscar dados da API
  }, []);

  const renderItem = ({ item }: { item: DadoAgro }) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemValue}>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header/>

      <Text style={styles.title}>Dashboard</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Dashboard;
