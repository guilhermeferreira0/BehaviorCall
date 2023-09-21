import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, Icon, SafeAreaView } from 'react-native';
import { Octicons  } from '@expo/vector-icons';

import styles from './style';

function Bars() {
  const [ visible, setVisible ] = useState(false);
  const options = [
    {
      title: 'Publicar',
      icon: 'Teste',
      action: () => alert('Teste'),
    }
  ];

  return(
    <View>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Octicons name="three-bars" size={24} color="black" />
      </TouchableOpacity>
      <Modal transparent visible={'false'}>
        <SafeAreaView
          style={{flex: 1, backgroundColor: 'red'}}
          onTouchStart={() => setVisible(false)}
        >
          <View style={styles.bars}>
            {options.map((op, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => op.action}
            >
              <Text>{op.title}</Text>
              <Icon name={op.icon} size={26} color='#212121'/>
            </TouchableOpacity>))}
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

export default Bars;