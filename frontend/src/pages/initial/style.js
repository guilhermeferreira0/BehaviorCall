import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3DB1D4',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 500,
  },

  buttonAccess: {
    backgroundColor: '#2F86A1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    width: 150,
  },

  buttonAccessTxt: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Oswald-SemiBold'
  },
});

export default styles;