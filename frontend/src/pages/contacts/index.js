import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Bars from '../../components/bars';
import Tabs from '../../components/tabs';
import styles from './style';

function Contacts() {
    const state = {
      contacts: [
        {id: 1, nome: 'Dr Astrogildo', exp: '1 ano', idade: 15},
        {id: 2, nome: 'Dr Valdisney', exp: '5 anos', idade: 10},
        {id: 3, nome: 'Dr Crebiano', exp: '6 meses', idade: 57},
      ]
    }
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <Bars />
        <Text style={styles.title}>Contatos</Text>

        <FlatList
          data={state.contacts}
          keyExtractor={(item) => item.id}
          renderItem={({item}) =>
          <TouchableOpacity
            style={styles.contacts}
            onPress={() => navigation.navigate('Chat', {
              paramKey: item.nome
            }) }
          >
            <Text style={{fontFamily: 'Oswald-Medium'}}>{item.nome}</Text>
          </TouchableOpacity>
        }
        />

        <Tabs />
      </View>
    );
  };

export default Contacts;