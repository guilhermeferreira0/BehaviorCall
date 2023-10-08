import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingVertical: 10,
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },

  info: {
    marginLeft: 20,
  },

  name: {
    fontSize: 21,
    color: 'black',
    marginBottom: 5,
  },

  email: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  }
})

export default styles;