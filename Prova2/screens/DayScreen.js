import React, { useCallback } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const appointments = [
  { id: 21, descr: '08h00: Médico' },
  { id: 22, descr: '10h30: Reunião de planejamento' },
  { id: 23, descr: '15h00: Saída viagem' }
]

export default function DayScreen() {
  const renderItem = useCallback(({ item }) => (
    <View style={styles.card}>
      <Text style={styles.descr}>{item.descr}</Text>
    </View>
  ), []);
  return (
    <View>
      <Text style={styles.title}>11/11 (ter)</Text>
      <Text style={styles.ident}>Blanca Ribeiro Silva</Text>
      <Text style={styles.ident}>8º Semestre de Ciência da Computação</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        initialNumToRender={12}
        windowSize={10}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f9fa',
    marginVertical: 6,
    padding: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  descr: {
    fontSize: 16,
  },
  ident: {
    textAlign: 'center'
  }
});