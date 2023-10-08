import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, View, Text } from 'react-native';

import styles from './styles';

function ListItem({ data }) {
  return (
    <TouchableOpacity style={styles.section}>
      <Image source={{uri: data.avatar}} style={styles.img}/>
      <View style={styles.info}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.email}>{data.email}</Text>
      </View>
    </TouchableOpacity>
  );
}

ListItem.propTypes = {
  data: PropTypes.object
}

export default ListItem;