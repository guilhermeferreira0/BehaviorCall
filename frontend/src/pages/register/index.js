import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.Text animation='fadeInRight' delay={500} style={styles.title}>Registrar</Animatable.Text>

      <Animatable.View animation='fadeInLeft' delay={200} style={styles.form}>

        <Text style={styles.formText}>Usuário: </Text>
        <TextInput
          style={styles.input}
          placeholder='username: '
        />

        <Text style={styles.formText}>Senha: </Text>
        <TextInput
          style={styles.input}
          placeholder='password: '
        />

        <Text style={styles.formText}>E-Mail: </Text>
        <TextInput
          style={styles.input}
          placeholder='password: '
        />

        <Animatable.View style={styles.containerButtons}>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonRegisterText}>Cadastrar</Text>
          </TouchableOpacity>

        </Animatable.View>

      </Animatable.View>

    </View>
  );
};

export default Login;