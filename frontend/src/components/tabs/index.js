import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AntDesign, MaterialCommunityIcons  } from '@expo/vector-icons';
import styles from './styles';

function Tabs() {
  const navigation = useNavigation();

  return(
    <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Contact')}
        >
          <MaterialCommunityIcons name="message-text-outline" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
        >
          <AntDesign name="home" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="bell-ring-outline" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Schedule')}
        >
          <MaterialCommunityIcons name="calendar-month-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
  );
}

export default Tabs;