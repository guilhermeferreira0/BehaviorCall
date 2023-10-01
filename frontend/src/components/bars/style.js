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
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 'auto',
    height: 'auto'
  },

  buttons: {
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 430,
    gap: 12
  },

  flexDireRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textUser: {
    marginTop: 20,
    fontFamily: 'Oswald-Bold',
    fontSize: 22,
    textTransform: 'uppercase',
    color: '#FFFFFF'
  },

  textDescription: {
    fontSize: 14,
    fontFamily: 'Oswald-Regular',
    color: '#FFFFFF'
  },

  textDel: {
    color: '#EE0000',
    fontFamily: 'Oswald-SemiBold',
    marginLeft: 8,
  },

  textSettings: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Oswald-Medium',
    marginLeft: 8,
  },

})

export default styles;