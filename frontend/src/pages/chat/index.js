import React, { useState } from 'react';
import { View, Text, TextInput, StatusBar, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';

import { Entypo, Ionicons, Foundation   } from '@expo/vector-icons';
import styles from './styles';

const Messages = [
  {
    id: '1',
    userName: 'Jonny',
    userImg: '',
    messageText: 'Hey there, this lorem ipsum seila'
  },
  {
    id: '2',
    userName: 'Maria',
    userImg: '',
    messageText: 'Hey there, this lorem ipsum seila'
  },
]

function Chat() {
  const [listMsg, setListMsg] = useState(Messages);

  return(
    <SafeAreaView>
      <StatusBar barStyle='light-content'/>
      <View style={styles.nav}>
        <TouchableOpacity>
          <Entypo name="chevron-left" size={40} color="black" />
        </TouchableOpacity>


        <View style={styles.userInfo}>
          <Image
            source={require('../../../assets/img/user-icon.png')}
            style={styles.userImage}
          />
          <Text>Dr. Fulano</Text>
        </View>

        <View style={styles.icons}>
          <Foundation name="telephone" size={28} color="black" />
          <Ionicons name="videocam-outline" size={28} color="black" />
        </View>

      </View>
      <View style={styles.content} />
          <View>
            <TextInput />
            <TouchableOpacity>
              <Ionicons name="send" size={28} color="black" />
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
}

export default Chat;