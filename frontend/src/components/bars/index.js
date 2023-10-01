import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, SafeAreaView, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Octicons, EvilIcons, AntDesign} from '@expo/vector-icons';

import Edit from '../edit';
import styles from './style';

function Bars() {
  const  [ visible, setVisible ] = useState(false);

  return(
    <>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Octicons name="three-bars" size={24} color="black" />
      </TouchableOpacity>

      <SafeAreaView>
        <Modal
        transparent={true}
        visible={visible}
        animationType='fade'
        onRequestClose={() => setVisible(false)}
        >
          <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.3)'}}>
            <TouchableOpacity style={{flex: 1}} onPress={() => setVisible(false)}>
              <Animatable.View
                style={styles.barNav}
                animation='slideInLeft'
                easing='ease'
              >
                <TouchableOpacity>
                  <EvilIcons name="user" size={150} color="black" />
                </TouchableOpacity>

                <Text style={styles.textUser}>Fulano</Text>
                <Text style={styles.textDescription}>Help Seeker</Text>
                <Text style={styles.textDescription}>Lvl. {}</Text>

                <View style={styles.buttons}>

                  <TouchableOpacity
                    style={styles.flexDireRow}
                    onPress={() => {
                      Alert.alert('Excluir Usuario', 'Tem certeza que deseja excluir?', [
                        {
                          text: 'Cancelar',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {text: 'Excluir', onPress: () => console.log('OK Pressed')},
                      ]);
                    }}
                  >
                    <AntDesign name="delete" size={24} color="red" />
                    <Text style={styles.textDel}>Excluir</Text>
                  </TouchableOpacity>

                  <Edit />
                </View>

                <TouchableOpacity style={styles.flexDireRow}>
                <AntDesign name="setting" size={24} color="black" />
                  <Text style={styles.textSettings}>Configurações</Text>
                </TouchableOpacity>

              </Animatable.View>

            </TouchableOpacity>
          </SafeAreaView>

        </Modal>

        {visible ?
        <View
        style={styles.overlay} />
        : null}
      </SafeAreaView>
    </>
  );
}

export default Bars;