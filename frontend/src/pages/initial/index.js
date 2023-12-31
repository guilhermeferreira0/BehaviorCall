import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

function Home() {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Animatable.Image
        animation='flipInY'
        duration={3000}
        delay={500}
        source={require('../../../assets/img/B.jpg')}
        style={styles.image}
      />

      <TouchableOpacity
        style={styles.buttonAccess}
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.buttonAccessTxt}>Acessar</Text>
      </TouchableOpacity>

    </View>
  );
}

export default Home;