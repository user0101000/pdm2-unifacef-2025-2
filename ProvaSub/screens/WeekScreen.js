import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';
import compSemana from '../data/compSemana';

// Mapeamento para que o SectionList entenda
const appointments = compSemana.map(secao => ({
  title: secao.titulo,
  data: secao.dados
}));

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