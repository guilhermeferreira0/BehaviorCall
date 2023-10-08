import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3DB1D4',
    padding: 20,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Oswald-Bold',
    lineHeight: 32,
    textTransform: "uppercase",
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
  },

  section: {
    padding: 10,
    margin: 5,
    borderRadius: 6,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  btnSelected: {
    flexShrink: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#2F86A1',
    marginRight: 10,
    borderColor: '#365FE0',
    borderStyle: 'solid',
    borderWidth: 2,
    fontSize: 20,
  },

  daySelected: {
    flexShrink: 1,
    padding: 10,
    fontSize: 15,
  },

  tabs: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  notification: {
    flexShrink: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#2F86A1',
    marginRight: 10,
    borderColor: '#365FE0',
    borderStyle: 'solid',
    borderWidth: 2,
    fontSize: 20,
  }
})

export default styles;