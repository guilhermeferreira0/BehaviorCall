import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './style';

function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      <Animatable.View animation='fadeInUp' style={styles.form}>

        <Text style={styles.formText}>Nome De Usuário: </Text>
        <TextInput
          style={styles.input}
          placeholder='username: '
        />

        <Text style={styles.formText}>Senha: </Text>
        <TextInput
          style={styles.input}
          placeholder='password: '
        />

        <Animatable.View style={styles.containerButtons}>

          <TouchableOpacity style={[styles.buttonAccess, styles.button]}>
          <Text style={styles.buttonAccessText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonRegisterText}>Cadastrar</Text>
          </TouchableOpacity>

        </Animatable.View>

      </Animatable.View>

    </View>
  );
};

export default Login;