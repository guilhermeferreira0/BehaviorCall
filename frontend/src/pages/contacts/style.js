import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3DB1D4',
    padding: 20,
    justifyContent: 'space-between',
  },

  contacts: {
    padding: 10,
    backgroundColor: '#2F86A1',
    margin: 5,
    borderRadius: 6,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Oswald-Bold',
    lineHeight: 32,
    textTransform: "uppercase",
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
});

export default styles;