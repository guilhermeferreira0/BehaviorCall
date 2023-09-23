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
    marginBottom: 450,
    gap: 25
  },

  flexDireRow: {
    flexDirection: 'row',
  },

  textUser: {
    marginTop: 20,
    fontWeight: '700',
    fontSize: 22,
    textTransform: 'uppercase',
    color: '#FFFFFF'
  },

  textDescription: {
    fontSize: 14,
    fontWeight: '300',
    color: '#FFFFFF'
  },

  textDel: {
    color: '#EE0000',
    fontWeight: '600',
    marginLeft: 8,
  },

  textEdit: {
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: 8,
  },

  textSettings: {
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: 8,
  },

})

export default styles;