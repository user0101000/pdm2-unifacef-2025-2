import React from 'react';

import { SectionList, Text, View, StyleSheet } from 'react-native';

const appointments = [
  { 
    title: 'Segunda-feira (10/11)', 
    data: [
      '09h30: Dentista',
      '16h00: Pilates'
    ] 
  },
  { 
    title: 'Terça-feira (11/11)', 
    data: [
      '08h00: Médico',
      '10h30: Reunião de planejamento',
      '15h00: Saída viagem'
    ] 
  },
  { 
    title: 'Quarta-feira (12/11)', 
    data: [
      '09h00: Congresso',
      '12h30: Almoço com executivos',
      '20h30: Jantar de confraternização'
    ] 
  },
];

export default function WeekScreen() {
  return (
    <View>
      <Text style={styles.ident}>Blanca Ribeiro Silva</Text>
      <Text style={styles.ident}>8º Semestre de Ciência da Computação</Text>
      <SectionList
        sections={appointments}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    backgroundColor: '#eee',
    padding: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  item: {
    padding: 10,
    fontSize: 16
  },
  ident: {
    textAlign: 'center'
  }
});