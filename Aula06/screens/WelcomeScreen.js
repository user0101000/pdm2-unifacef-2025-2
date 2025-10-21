import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Seja Bem-Vindo(a)!</Text>
            <Text style={styles.subtitle}>Login realizado com sucesso.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6ffe6',
    },
    message: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#28a745',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#555',
    },
});