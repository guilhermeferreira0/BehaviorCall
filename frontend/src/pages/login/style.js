import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3DB1D4',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Oswald-Bold',
    lineHeight: 32,
    textTransform: "uppercase",
    textAlign: 'center',
    marginTop: 100,
    marginLeft: 144,
    marginRight: 144,
    marginBottom: 152,
  },

  form: {
    flex: 1,
    marginLeft: 60,
    marginRight: 60,
  },

  formText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Oswald-Medium',
    lineHeight: 23,
    marginTop: 7,
    marginBottom: 7,
  },

  input: {
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    height: 40,
  },

  containerButtons: {
    marginTop: 40,
    flexDirection: "row-reverse",
    justifyContent: "space-around",
  },

  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonAccess: {
    backgroundColor: '#2F86A1',
  },

  buttonAccessText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Oswald-SemiBold',
  },

  buttonRegisterText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Oswald-SemiBold',
  },

})

export default styles;