import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import { AntDesign, MaterialCommunityIcons  } from '@expo/vector-icons';

import styles from './style';
import Bars from '../../components/bars';

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
        onPress={() => navigation.navigate('Chat')}
      >
        <Text style={styles.nextSectionText}>Proxima Sessão</Text>
      </TouchableOpacity>

      <View style={styles.nav}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="message-text-outline" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="home" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="bell-ring-outline" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="calendar-month-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

    </Animatable.View>
  );
}

export default Home;