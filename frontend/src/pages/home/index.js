import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import Bars from '../../components/bars';
import Tabs from '../../components/tabs';

function Home() {
  const navigation = useNavigation();
  const level = 100;

  return(
    <Animatable.View style={styles.container} animation='slideInDown'>

      <Bars />

      <View style={styles.firstContainer}>
        <Image style={styles.circleImg}/>
        <View>
          <Text style={styles.firstContainerTitle}>Help Seeker</Text>
          <Text style={styles.firstContainerLevel}>Lvl. {level}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.nextSection}
        onPress={() => navigation.navigate('Contact')}
      >
        <Text style={styles.nextSectionText}>Proxima Sessão</Text>
      </TouchableOpacity>

      <Tabs />

    </Animatable.View>
  );
}

export default Home;