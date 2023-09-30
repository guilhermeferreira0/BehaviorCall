import React, { useState } from 'react';
import { View, Text, TextInput, StatusBar, SafeAreaView,TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import PropTypes from 'prop-types';

import { useNavigation } from '@react-navigation/native';
import { Entypo, Ionicons, Foundation } from '@expo/vector-icons';
import styles from './styles';

function Chat({ route }) {
  const navigation = useNavigation();
  const [msg, setMsg] = useState('');
  const [inputHeight, setInputHeight] = useState(0)

  return(
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle='light-content'/>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Entypo name="chevron-left" size={40} color="black" />
        </TouchableOpacity>

        <View style={styles.userInfo}>
          <Image
            source={require('../../../assets/img/User_icon_2.svg.webp')}
            style={styles.userImage}
          />
          <Text>{route.params.paramKey}</Text>
        </View>

        <View style={styles.icons}>
          <TouchableOpacity>
            <Foundation name="telephone" size={28} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="videocam-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>

        <View style={styles.messages}/>

        <View style={styles.footer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
          >
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <View style={styles.input}>
                <TextInput
                  style={{ height: inputHeight}}
                  placeholder='Digite aqui...'
                  value={msg}
                  multiline={true}
                  onChangeText={setMsg}
                  onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height + 12)}
                />
              </View>

              <TouchableOpacity>
                <Ionicons name="send" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );
}

Chat.propTypes = {
  route: PropTypes.string
};


export default Chat;