import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  nav: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#2F86A1',
  },

  userImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  icons: {
    flexDirection: 'row',
    gap: 25,
    marginLeft: 100,
  },

  content: {
    flex: 1,
    backgroundColor: '#3DB1D4',
  }
});

export default styles;