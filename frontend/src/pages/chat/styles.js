import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  nav: {
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

  section: {
    flex: 1,
    backgroundColor: '#3DB1D4',
    padding: 20,
  },

  messages: {
    flex: 1,
  },

  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: 280,
    borderRadius: 20,
    paddingLeft: 15,
    marginRight: 10,
  }
});

export default styles;