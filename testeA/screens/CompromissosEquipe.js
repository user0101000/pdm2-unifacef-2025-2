import React from 'react';

import { SectionList, Text, View, StyleSheet } from 'react-native';

const appointments = [
  { 
    title: 'Eu', 
    data: [
      '09h30: Reunião "Daily"',
      '14h00: Reunião com cliente Carros & Carros',
      '16h30: Prazo final Projeto X'
    ] 
  },
  { 
    title: 'Jurema (chefe)', 
    data: [
      '09h30: Reunião "Daily"',
      '12h00: Aumoço com a diretoria',
      '15h00: Saída viagem'
    ] 
  },
  { 
    title: 'Aderbal', 
    data: [
      '09h00: Reunião "Daily"',
      '13h30: Visita técnica Uni-FACEF',
      '16h30: Prazo final Projeto X'
    ] 
  },
];

export default function CompromissosEquipe() {
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