import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

function Header() {
  return(
    <View style={styles.nav}>
      <Text>BehaviorCall</Text>
    </View>
  );
}

export default Header;