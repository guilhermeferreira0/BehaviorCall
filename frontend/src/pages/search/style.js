import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3DB1D4',
    padding: 20,
    justifyContent: 'space-between',
  },

  header: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 17,
  },

  input: {
    backgroundColor: '#1A6E87',
    padding: 12,
    borderRadius: 7,
  },

  list: {
    padding: 20,
    marginBottom: 48,
  }
});

export default style;