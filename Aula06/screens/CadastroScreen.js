import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

// Regex simples para validação de e-mail
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_SENHA = 6;

export default function CadastroScreen({ navigation }) {
    // 1. Estados para os campos do formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [telefone, setTelefone] = useState('');

    // Estados para os erros (erros específicos abaixo de cada campo)
    const [erros, setErros] = useState({});

    const validar = () => {
        let errosTemp = {};
        let isValid = true;

        // Validação: Nome
        if (nome.length < 3) {
            errosTemp.nome = 'O nome deve ter no mínimo 3 caracteres.';
            isValid = false;
        }

        // Validação: E-mail
        if (!emailRegex.test(email)) {
            errosTemp.email = 'Formato de e-mail inválido.';
            isValid = false;
        }

        // Validação: Senha
        if (senha.length < MIN_SENHA) {
            errosTemp.senha = `A senha deve ter no mínimo ${MIN_SENHA} caracteres.`;
            isValid = false;
        }

        // Validação: Confirmar Senha
        if (senha !== confirmarSenha) { // Regra: Senha e Confirmação devem ser iguais
            errosTemp.confirmarSenha = 'As senhas não coincidem.';
            isValid = false;
        } else if (confirmarSenha.length < MIN_SENHA) {
             errosTemp.confirmarSenha = 'Confirmação deve ter no mínimo 6 caracteres.';
             isValid = false;
        }

        // Validação: Telefone (apenas verificar se foi preenchido minimamente, pois o keyboardType restringe a entrada)
        if (telefone.length < 8) {
             errosTemp.telefone = 'O telefone deve ter no mínimo 8 dígitos.';
             isValid = false;
        }
        
        setErros(errosTemp);
        return isValid;
    };

    const handleCadastro = () => {
        if (validar()) {
            // Se for válido, navega e passa os dados
            navigation.navigate('Details', {
                nome,
                email,
                telefone,
            });
        }
    };

    const ErrorText = ({ field }) => {
        return erros[field] ? <Text style={styles.errorText}>{erros[field]}</Text> : null;
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Cadastro Completo</Text>

            {/* Nome Completo */}
            <TextInput
                style={[styles.input, erros.nome && styles.inputError]}
                placeholder="Nome Completo"
                value={nome}
                onChangeText={setNome}
            />
            <ErrorText field="nome" />

            {/* E-mail */}
            <TextInput
                style={[styles.input, erros.email && styles.inputError]}
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <ErrorText field="email" />

            {/* Senha */}
            <TextInput
                style={[styles.input, erros.senha && styles.inputError]}
                placeholder="Senha (mín. 6 caracteres)"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />
            <ErrorText field="senha" />

            {/* Confirmar Senha */}
            <TextInput
                style={[styles.input, erros.confirmarSenha && styles.inputError]}
                placeholder="Confirmar Senha"
                secureTextEntry
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
            />
            <ErrorText field="confirmarSenha" />

            {/* Telefone */}
            <TextInput
                style={[styles.input, erros.telefone && styles.inputError]}
                placeholder="Telefone (apenas números)"
                keyboardType="numeric" // Regra: O telefone deve aceitar apenas números
                value={telefone}
                // Garante que apenas números sejam armazenados no estado:
                onChangeText={(text) => setTelefone(text.replace(/[^0-9]/g, ''))}
            />
            <ErrorText field="telefone" />

            <View style={styles.buttonContainer}>
                <Button 
                    title="Finalizar Cadastro" 
                    onPress={handleCadastro}
                    color="#28a745"
                />
            </View>
        </ScrollView>
    );
}

// Estilos
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        paddingBottom: 40,
        minHeight: '100%',
    },
    title: {
        fontSize: 24,
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
        color: 'red',
        marginBottom: 15,
        fontSize: 14,
        alignSelf: 'flex-start',
    },
    buttonContainer: {
        marginTop: 20,
    }
});