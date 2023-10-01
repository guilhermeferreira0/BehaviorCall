import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  barNav: {
    width: '50%',
    height: '100%',
    padding: 0,
    backgroundColor: '#2F86A1',
    alignItems: 'center',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'red',
    width: 'auto',
    height: 'auto'
  },

  form: {
    flex: 1,
    width: 150,
  },

  inputText: {
    marginTop: 20,
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Oswald-Regular',
  },

  input: {
    marginTop: 8,
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
  }

})

export default styles;