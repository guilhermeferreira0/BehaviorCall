import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Bars from '../../components/bars';
import Tabs from '../../components/tabs';
import ListItem from '../../components/listItem';
import results from '../../components/results';

import style from './style';

function Search() {
  const [ searchText, setSearchText ] = useState('');
  const [ list, setList ] = useState(results);

  useEffect(() => {
    if(searchText === '') {
      setList(results);
    } else {
      setList(
        results.filter(item => (item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
        )
      )
    }

  }, [searchText])

  const handleOrderClick = () => {
    const sortList = [...list]

    // eslint-disable-next-line
    sortList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))

    // sortList.sort((a, b) => {
    //   if(a.name > b.name) {
    //     return 1;
    //   }
    //   if (b.name > a.name) {
    //     return -1
    //   }
    //   return 0;
    // })

    setList(sortList)
  };

  return(
    <View style={style.container}>
      <Bars />
        <View style={style.header}>
          <TextInput
            style={style.input}
            placeholder='Pesquise por um profissional'
            placeholderTextColor='#324C54'
            value={searchText}
            onChangeText={(t) => setSearchText(t)}
          />

          <TouchableOpacity
            onPress={handleOrderClick}
          >
            <MaterialCommunityIcons
              name='order-alphabetical-ascending'
              size={32}
              color='black'
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={list}
          style={style.list}
          renderItem={({item}) => <ListItem data={item} />}
          keyExtractor={(item) => item.id}
        />
      <Tabs />
    </View>
  );
}

export default Search;