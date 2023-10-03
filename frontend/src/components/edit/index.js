import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Animatable from 'react-native-animatable';
import { Feather, EvilIcons } from '@expo/vector-icons';

import styles from './style';

function Edit() {
  const  [ visible, setVisible ] = useState(false);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result?.assets[0].uri);
      }
    } catch(e) {
      // eslint-disable-next-line
      console.log('Chave Cancelada: ', e)
    }

  };

  return(
    <>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => setVisible(true)}
      >
        <Feather name="edit" size={24} color="black" />
        <Text style={{marginLeft: 8}}>Editar</Text>
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
                <TouchableOpacity onPress={pickImage}>
                  <EvilIcons name="user" size={150} color="black" />
                  {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </TouchableOpacity>

                <View style={styles.form}>
                  <Text style={styles.inputText}>Nome: </Text>
                  <TextInput
                    style={styles.input}
                  />

                  <Text style={styles.inputText}>Sobrenome: </Text>
                  <TextInput
                    style={styles.input}
                  />

                  <Text style={styles.inputText}>E-Mail: </Text>
                  <TextInput
                    style={styles.input}
                  />
                </View>


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

export default Edit;