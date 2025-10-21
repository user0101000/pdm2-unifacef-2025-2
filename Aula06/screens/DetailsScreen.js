import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Recebe a propriedade 'route' que contém os parâmetros (dados) passados
export default function DetailsScreen({ route }) {
    // Captura os dados passados pela tela de Cadastro 
    const { nome, email, telefone } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro Realizado com Sucesso!</Text>
            
            <View style={styles.dataContainer}>
                <Text style={styles.dataTitle}>Dados Cadastrados:</Text>
                
                {/* Exibe os dados formatados [cite: 114] */}
                <Text style={styles.dataItem}><Text style={styles.label}>Nome:</Text> {nome}</Text>
                <Text style={styles.dataItem}><Text style={styles.label}>E-mail:</Text> {email}</Text>
                <Text style={styles.dataItem}><Text style={styles.label}>Telefone:</Text> {telefone}</Text>
                
                <Text style={styles.footer}>Você pode usar esses dados para fazer login.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#28a745',
        marginBottom: 30,
        textAlign: 'center',
    },
    dataContainer: {
        backgroundColor: '#f8f9fa',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e9ecef',
    },
    dataTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#dee2e6',
        paddingBottom: 5,
    },
    dataItem: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
    label: {
        fontWeight: 'bold',
        color: '#555',
        marginRight: 5,
    },
    footer: {
        marginTop: 20,
        fontSize: 14,
        textAlign: 'center',
        color: '#6c757d',
    },
});