import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// Regex simples para validação de e-mail
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        let valid = true;

        // **1. Validação de E-mail**
        if (!email) {
            setEmailError('O e-mail é obrigatório.');
            valid = false;
        } else if (!emailRegex.test(email)) {
            setEmailError('Formato de e-mail inválido.');
            valid = false;
        } else {
            setEmailError('');
        }

        // **2. Validação de Senha (Tamanho)**
        if (!password) {
            setPasswordError('A senha é obrigatória.');
            valid = false;
        } else if (password.length < 6) {
            // O exercício pede "tamanho da senha". Definimos 6 como mínimo.
            setPasswordError('A senha deve ter no mínimo 6 caracteres.');
            valid = false;
        } else {
            setPasswordError('');
        }

        // **3. Navegação em caso de Sucesso**
        if (valid) {
            // Simulação de login bem-sucedido
            // Na vida real, aqui haveria uma chamada a uma API para autenticação
            
            Alert.alert("Sucesso", "Login realizado!");
            
            // Navegue para a tela de Boas-Vindas
            navigation.navigate('Welcome');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fazer Login</Text>

            {/* Campo E-mail */}
            <TextInput
                style={[styles.input, emailError ? styles.inputError : {}]}
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            {/* Mostrar erro diretamente abaixo do campo */}
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

            {/* Campo Senha */}
            <TextInput
                style={[styles.input, passwordError ? styles.inputError : {}]}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {/* Mostrar erro diretamente abaixo do campo */}
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

            {/* Botão de Login */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f0f0f7',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 5,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    inputError: {
        borderColor: '#ff3333',
    },
    errorText: {
        color: '#ff3333',
        marginBottom: 15,
        fontSize: 14,
        alignSelf: 'flex-start',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});